"use strict";

const Steps = require("glace-js").Steps;

Steps.register({

    showArchive: async function (speaker, matcher) {
        /**
         * Step to show archieve topics by author.
         *
         * @async
         * @memberOf Steps
         * @method showArchive
         * @instance
         * @arg {string} speaker - Full name of speaker.
         * @arg {object} [matcher] - chaijs matcher. If omitted, check will be
         *  skipped for first found topic.
         * @return {Promise}
         */

        const timeout = 5; // sec
        const indexPage = this._pages().index;
        await indexPage.linkArchive.click();
        await indexPage.textFilter.setText(speaker, { scroll: false, enter: true });

        if (matcher) {
            await expect(() => indexPage.itemTopics.getCount()).to.waitFor(matcher, timeout);
        }

        await this.pause(timeout, "time to observe result");
    },
});
