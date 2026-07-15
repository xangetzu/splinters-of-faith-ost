import { existsSync, statSync } from "node:fs";
import { resolve, sep } from "node:path";
import { getCollection } from "astro:content";

export async function getValidatedContent() {
  const [worlds, collections, tracks, assets] = await Promise.all([
    getCollection("worlds"),
    getCollection("collections"),
    getCollection("tracks"),
    getCollection("assets"),
  ]);

  const errors: string[] = [];
  const stableIds = new Map<string, string>();

  for (const [group, entries] of Object.entries({ worlds, collections, tracks, assets })) {
    const slugs = new Set<string>();

    for (const entry of entries) {
      const stableId = entry.data.stableId;
      const existing = stableIds.get(stableId);
      if (existing) {
        errors.push(`Duplicate stable ID ${stableId} in ${existing} and ${group}/${entry.id}.`);
      } else {
        stableIds.set(stableId, `${group}/${entry.id}`);
      }

      if ("slug" in entry.data) {
        if (slugs.has(entry.data.slug)) {
          errors.push(`Duplicate slug ${entry.data.slug} in ${group}.`);
        }
        slugs.add(entry.data.slug);
      }
    }
  }

  const collectionById = new Map(collections.map((entry) => [entry.data.stableId, entry]));
  const trackById = new Map(tracks.map((entry) => [entry.data.stableId, entry]));
  const assetById = new Map(assets.map((entry) => [entry.data.stableId, entry]));
  const sofIds = new Set<string>();

  for (const world of worlds) {
    for (const collectionId of world.data.featuredCollectionIds) {
      if (!collectionById.has(collectionId)) {
        errors.push(`${world.data.stableId} references missing featured collection ${collectionId}.`);
      }
    }
  }

  for (const collection of collections) {
    for (const relatedId of collection.data.relatedCollectionIds) {
      if (relatedId === collection.data.stableId) {
        errors.push(`${collection.data.stableId} cannot relate to itself.`);
      } else if (!collectionById.has(relatedId)) {
        errors.push(`${collection.data.stableId} references missing collection ${relatedId}.`);
      }
    }

    const orderedTrackIds = collection.data.trackIds ?? [];
    if (new Set(orderedTrackIds).size !== orderedTrackIds.length) {
      errors.push(`${collection.data.stableId} has duplicate IDs in trackIds.`);
    }

    for (const trackId of orderedTrackIds) {
      const track = trackById.get(trackId);
      if (!track) {
        errors.push(`${collection.data.stableId} references missing track ${trackId}.`);
      } else if (!track.data.collectionIds.includes(collection.data.stableId)) {
        errors.push(`${trackId} does not canonically belong to ${collection.data.stableId}.`);
      }
    }

    const canonicalIds = tracks
      .filter((track) => track.data.collectionIds.includes(collection.data.stableId))
      .map((track) => track.data.stableId);
    const omittedIds = canonicalIds.filter((trackId) => !orderedTrackIds.includes(trackId));
    if (orderedTrackIds.length > 0 && omittedIds.length > 0) {
      errors.push(`${collection.data.stableId} explicit trackIds omits ${omittedIds.join(", ")}.`);
    }
  }

  for (const track of tracks) {
    if (sofIds.has(track.data.sofId)) {
      errors.push(`Duplicate SOF ID ${track.data.sofId}.`);
    }
    sofIds.add(track.data.sofId);

    for (const collectionId of track.data.collectionIds) {
      if (!collectionById.has(collectionId)) {
        errors.push(`${track.data.stableId} references missing collection ${collectionId}.`);
      }
    }

    const trackAssets = track.data.audioAssetIds
      .map((assetId) => assetById.get(assetId))
      .filter((asset) => asset !== undefined);

    for (const assetId of track.data.audioAssetIds) {
      const asset = assetById.get(assetId);
      if (!asset) {
        errors.push(`${track.data.stableId} references missing asset ${assetId}.`);
      } else if (asset.data.type !== "audio") {
        errors.push(`${track.data.stableId} references non-audio asset ${assetId}.`);
      }
    }

    const playable = trackAssets.some(
      (asset) =>
        asset.data.type === "audio" &&
        (asset.data.purpose === "stream" || asset.data.purpose === "both"),
    );
    if (track.data.status === "released" && !playable) {
      errors.push(`${track.data.stableId} is released but has no playable audio asset.`);
    }

    if (track.data.downloadEnabled) {
      const downloadable = trackAssets.some(
        (asset) =>
          asset.data.type === "audio" &&
          (asset.data.purpose === "download" || asset.data.purpose === "both") &&
          asset.data.rights.usage.includes("download"),
      );
      if (!downloadable) {
        errors.push(`${track.data.stableId} enables downloads without licensed download media.`);
      }
    }
  }

  const publicRoot = resolve(process.cwd(), "public");
  for (const asset of assets) {
    for (const source of asset.data.sources) {
      if (/^https:\/\//i.test(source.url)) continue;
      if (/^[a-z]+:/i.test(source.url) || source.url.startsWith("//")) {
        errors.push(`${asset.data.stableId} uses an unsupported source URL: ${source.url}.`);
        continue;
      }

      const filePath = resolve(publicRoot, source.url.replace(/^\/+/, ""));
      if (filePath !== publicRoot && !filePath.startsWith(`${publicRoot}${sep}`)) {
        errors.push(`${asset.data.stableId} source escapes public/: ${source.url}.`);
      } else if (!existsSync(filePath)) {
        errors.push(`${asset.data.stableId} source is missing: ${source.url}.`);
      } else if (source.byteSize && statSync(filePath).size !== source.byteSize) {
        errors.push(
          `${asset.data.stableId} byte size differs for ${source.url}: expected ${source.byteSize}, found ${statSync(filePath).size}.`,
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  }

  return { worlds, collections, tracks, assets };
}
