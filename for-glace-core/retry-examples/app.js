"use strict";

const LOG = require("glace-utils").logger;

module.exports = {

    launch: () => {
        LOG.info("launch application");
    },

    close: () => {
        LOG.info("close application");
    },

    openSettings: () => {
        LOG.info("open settings");
    },

    setLanguage: lang => {
        LOG.info("set application language to", lang);
    },

    saveSettings: () => {
        LOG.info("save and close settings");
    },

    checkLanguage: lang => {
        LOG.info("check that application language is", lang);
    },
};
