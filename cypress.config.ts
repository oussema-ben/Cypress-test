import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    projectId: "nvqu7q",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
