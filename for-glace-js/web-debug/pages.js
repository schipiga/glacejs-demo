"use strict";

const Page = require("glace-js").Page;

module.exports.index = new Page(
    "index", "/",
    { linkArchive: "a[href='#archive']",
        textFilter: "div.form-group > input[type='text']",
        itemTopics: "div[ng-repeat^='speech in meeting.speeches'] > b.ng-binding" });
