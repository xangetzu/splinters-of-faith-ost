import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const status = z.enum(["draft", "planned", "in-progress", "released", "archived"]);
const stableId = z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)+$/);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const sofId = z.string().regex(/^\d{2}(?:-\d{2}){3}$/);

const shared = {
  stableId,
  slug,
  title: z.string().trim().min(1),
  status,
};

const worlds = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/world" }),
  schema: z.object({
    ...shared,
    description: z.string().trim().min(1),
    featuredCollectionIds: z.array(stableId),
    logoAssetId: stableId.optional(),
    heroArtworkId: stableId.optional(),
    currentReleaseId: stableId.optional(),
    composerName: z.string().trim().min(1).optional(),
    composerBiography: z.string().trim().min(1).optional(),
  }),
});

const soundtrackCollections = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/collections" }),
  schema: z.object({
    ...shared,
    kind: z.enum(["suite", "biome", "character", "tavern", "utility", "special"]),
    description: z.string().trim().min(1),
    tagline: z.string().trim().min(1).optional(),
    sofScope: z.string().regex(/^\d{2}-\d{2}$/),
    theme: z.object({
      accent: z.string(),
      accentContrast: z.string(),
      surface: z.string(),
      atmosphere: z.string(),
    }),
    completionPercentage: z.number().int().min(0).max(100).optional(),
    featuredArtworkId: stableId.optional(),
    relatedCollectionIds: z.array(stableId).default([]),
    trackIds: z.array(stableId).optional(),
    composerNotes: z.string().trim().min(1).optional(),
  }),
});

const tracks = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/tracks" }),
  schema: z.object({
    ...shared,
    sofId,
    subtitle: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1),
    durationSeconds: z.number().int().nonnegative(),
    collectionIds: z.array(stableId).min(1),
    audioAssetIds: z.array(stableId).min(1),
    subtype: z.string().trim().min(1).optional(),
    artworkId: stableId.optional(),
    tags: z.array(slug).default([]),
    moods: z.array(slug).default([]),
    instrumentation: z.array(z.string().trim().min(1)).default([]),
    composerNotes: z.string().trim().min(1).optional(),
    credits: z
      .array(
        z.object({
          name: z.string().trim().min(1),
          role: z.string().trim().min(1),
          url: z.url().optional(),
        }),
      )
      .default([]),
    releaseDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    downloadEnabled: z.boolean().default(false),
  }),
});

const rights = z.object({
  copyrightHolder: z.string().trim().min(1),
  usage: z.array(z.enum(["stream", "download", "display"])).min(1),
  licenseName: z.string().trim().min(1),
  licenseUrl: z.url().optional(),
  creditLine: z.string().trim().min(1).optional(),
  restrictions: z.string().trim().min(1).optional(),
  territories: z.array(z.string().trim().min(1)).optional(),
  expiresDate: z.coerce.date().optional(),
});

const source = z.object({
  url: z.string().trim().min(1),
  mimeType: z.string().regex(/^[a-z]+\/[a-z0-9.+-]+$/i),
  byteSize: z.number().int().positive().optional(),
  provider: z.string().trim().min(1).optional(),
  integrity: z.string().trim().min(1).optional(),
});

const assets = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/assets" }),
  schema: z.discriminatedUnion("type", [
    z.object({
      stableId,
      type: z.literal("audio"),
      title: z.string().trim().min(1).optional(),
      purpose: z.enum(["stream", "download", "both"]),
      codec: z.string().trim().min(1).optional(),
      bitrateKbps: z.number().int().positive().optional(),
      sampleRateHz: z.number().int().positive().optional(),
      bitDepth: z.number().int().positive().optional(),
      channels: z.number().int().positive().optional(),
      sources: z.array(source).min(1),
      rights,
    }),
    z.object({
      stableId,
      type: z.literal("image"),
      title: z.string().trim().min(1).optional(),
      width: z.number().int().positive().optional(),
      height: z.number().int().positive().optional(),
      sources: z.array(source).min(1),
      rights,
    }),
    z.object({
      stableId,
      type: z.literal("document"),
      title: z.string().trim().min(1).optional(),
      pageCount: z.number().int().positive().optional(),
      sources: z.array(source).min(1),
      rights,
    }),
    z.object({
      stableId,
      type: z.literal("video"),
      title: z.string().trim().min(1).optional(),
      durationSeconds: z.number().int().nonnegative().optional(),
      width: z.number().int().positive().optional(),
      height: z.number().int().positive().optional(),
      sources: z.array(source).min(1),
      rights,
    }),
  ]),
});

export const collections = {
  worlds,
  collections: soundtrackCollections,
  tracks,
  assets,
};
