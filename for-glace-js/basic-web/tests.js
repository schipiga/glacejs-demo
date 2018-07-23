"use strict";

test("Check that devclub.eu can be opened", () => {
    chunk(async () => {
        await $.openUrl("http://devclub.eu");
    });
});
