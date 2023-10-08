const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1ukkms',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://search-tanach-for-nikud-front-end.netlify.app/',
    LIVE_URL: 'https://nikudsearch.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: true,
    RECORD_KEY: '77c01fe1-affc-4b8f-8033-2791d3c80670',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://search-tanach-for-nikud-front-end.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
