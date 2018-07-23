"use strict";

test("passed test", () => {
    chunk(() => {});
});

test("failed test", () => {
    chunk(() => {
        throw Error("BOOM!");
    });
});

test("skipped test", { skip: "Due to bug https://my.bugtracker.org/126"}, () => {
    chunk(() => {});
});

test("with failed chunk", () => {
    chunk("first", () => {
        throw Error("BOOM!");
    });

    chunk("second", () => {});
});

test("with skipped chunk", () => {
    chunk("first", () => {});

    chunk("second", () => false);
});

test("with before and after hooks", () => {
    before(() => {
        console.log("before");
    });

    chunk("first", () => {});
    chunk("second", () => {});

    after(() => {
        console.log("after");
    });
});

test("with beforeChunk and afterChunk hooks", () => {
    beforeChunk(() => {
        console.log("before");
    });

    chunk("first", () => {});
    chunk("second", () => {});

    afterChunk(() => {
        console.log("after");
    });
});
