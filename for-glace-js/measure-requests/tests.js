"use strict";

test("Measure responses of devclub.eu", () => {

    before(async () => {
        await $.measureResponses();
    });

    chunk(async () => {
        await $.openUrl("http://devclub.eu");
    });

    after(async () => {
        const responses = await $.getResponsesData();
        console.log(responses.map(r => r.name));
        console.log();
        console.log(responses.filter(r => r.name === "devclub.eu/"));
    });
});
