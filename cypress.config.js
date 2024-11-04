const { defineConfig } = require("cypress");
module.exports = {
  // Other Cypress configurations
  pageLoadTimeout: 120000, // Increase page load timeout to 120 seconds
};


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
