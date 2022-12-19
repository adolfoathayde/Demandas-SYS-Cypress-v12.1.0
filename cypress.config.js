const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "baseUrl":"http://demandas-frwk.online/",
    "watchForFileChanges" : false,
    "env" : {
       "nome" : "adolfo.athayde" ,
       "senha" : "padawans"
    }

  },
});
