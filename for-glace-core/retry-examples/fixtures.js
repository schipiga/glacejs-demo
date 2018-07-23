"use strict";

const app = require("./app");

module.exports.launchedApp = func => {
    before(() => {
        app.launch();
    });

    func();

    after(() => {
        app.close();
    });
};
