const { DateTime } = require("luxon");
const siteData = require("../../src/_data/site.json");

module.exports = (date) => {
    let locale = "en";
    if (siteData.locale) {
      locale = siteData.locale.toString();
    }
    const readableDateFull = DateTime.fromJSDate(date, { zone: "utc" })
      .setLocale(locale)
      .toFormat("d LLLL yyyy HH:mm");
    return readableDateFull;
};
