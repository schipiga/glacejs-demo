"use strict";

const LOG = require("glace-utils").logger;

const app = require("./app");
const fx = require("./fixtures");

let i = 0;
app.checkLanguage = lang => {
    if (lang === "ru") {
        i++;
        if (i === 1) expect(lang, "Wrong application language").to.be.equal("en");
    }
    LOG.info("check that application language is", lang);
};

test("Change application language",
    null /* options */, [fx.launchedApp], () => {

        forEachLanguage(lang => {
            chunk("in settings", () => {
                app.openSettings();
                app.setLanguage(lang);
                app.saveSettings();
                app.checkLanguage(lang);
            });
        });
});
