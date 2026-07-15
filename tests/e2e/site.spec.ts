import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("playback survives internal navigation", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: /Forest/ }).click();
  await page.getByRole("button", { name: "Play Lonely Lanterns" }).click();
  await expect(page.locator("sof-player [data-title]")).toHaveText("Lonely Lanterns");
  await page.waitForFunction(() => !document.querySelector<HTMLAudioElement>("sof-player audio")?.paused);
  await page.getByRole("link", { name: "Return to the world" }).click();
  await expect(page.locator("sof-player [data-title]")).toHaveText("Lonely Lanterns");
  await expect.poll(() => page.locator("sof-player audio").evaluate((audio: HTMLAudioElement) => audio.paused)).toBe(false);
});

test("primary pages have no serious automated accessibility violations", async ({ page }) => {
  await page.goto("./");
  const home = await new AxeBuilder({ page }).analyze();
  expect(home.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))).toEqual([]);

  await page.goto("./collections/forest/");
  const collection = await new AxeBuilder({ page }).analyze();
  expect(collection.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))).toEqual([]);
});

test("keyboard focus reaches the skip link and main action", async ({ page }) => {
  await page.goto("./");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});
