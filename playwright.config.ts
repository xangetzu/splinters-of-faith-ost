import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321/splinters-of-faith-ost",
    channel: process.env.CI ? undefined : "msedge",
    trace: "on-first-retry",
  },
  webServer: {
    command: "node scripts/test-server.mjs",
    url: "http://127.0.0.1:4321/splinters-of-faith-ost/",
    reuseExistingServer: !process.env.CI,
  },
});
