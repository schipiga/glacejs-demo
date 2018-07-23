"use strict";

const pages = require("./pages");

CONF.web.url = "http://devclub.eu";

test("Filter speaker in devclub.eu", () => {

    before(() => {
        $.registerPages(pages.index);
    });

    chunk(async () => {
        await $.openApp();
        await $.showArchive("Сергей Чипига", { "to be equal": 3 });
    });
});
