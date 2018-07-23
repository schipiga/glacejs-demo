"use strict";

"use strict";

test("Manage speed of devclub.eu", () => {

    before(async () => {
        await $.enableCache();
        await $.openUrl("http://devclub.eu");
        await $.limitProxySpeed(128 /* kb/s */);
        await $.restartBrowser();
    });

    chunk(async () => {
        await $.startTimer();
        await $.openUrl("http://devclub.eu");
        await $.checkTimer({ "to be lte": 20 });
    });
});
