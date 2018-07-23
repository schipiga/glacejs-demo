"use strict";

const app = require("./app");
const fx = require("./fixtures");

test("Change application language",
    null /* options */, [fx.launchedApp], ctx => {

        forEachLanguage(ctx, lang => {
            chunk("in settings", () => {
                app.openSettings();
                app.setLanguage(lang);
                app.saveSettings();
                app.checkLanguage(lang);
            });
        });
});
