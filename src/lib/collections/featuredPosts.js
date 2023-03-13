const siteData = require("../../_data/site.json");
module.exports = (coll) => {
  const featuredPosts = [...coll.getFilteredByGlob("src/posts/*.md")];
  const feat = featuredPosts
  .filter((item) => {
    return item.data.featured === true;
  })
  .reverse().slice(0, siteData.featuredLimit);
  return feat;
};
