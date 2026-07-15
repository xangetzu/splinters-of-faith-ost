import { describe, expect, it } from "vitest";
import { chooseNextTrack } from "../../src/lib/audio/queue";

const queue = ["track-a", "track-b", "track-c"];

describe("chooseNextTrack", () => {
  it("advances in queue order", () => {
    expect(chooseNextTrack(queue, "track-a", { shuffle: false, repeatQueue: false })).toBe("track-b");
  });

  it("stops at the end when repeat is off", () => {
    expect(chooseNextTrack(queue, "track-c", { shuffle: false, repeatQueue: false })).toBeUndefined();
  });

  it("wraps at the end when queue repeat is on", () => {
    expect(chooseNextTrack(queue, "track-c", { shuffle: false, repeatQueue: true })).toBe("track-a");
  });

  it("never immediately repeats the active track in shuffle mode", () => {
    expect(chooseNextTrack(queue, "track-b", { shuffle: true, repeatQueue: false, random: () => 0.5 })).not.toBe("track-b");
  });
});
