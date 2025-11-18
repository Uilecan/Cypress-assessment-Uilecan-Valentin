const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 8000,
    video: false,
    watchForFileChanges: false
  },
});
