const siteData = require("../../src/_data/site.json");

module.exports = (coll) => {
  const allPosts = require("./posts")(coll);
  const postPerPage = siteData.paginate;
  const numberOfPages = Math.ceil(allPosts.length / postPerPage);
  const pagedPosts = [];

  for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
    const sliceFrom = (pageNumber - 1) * postPerPage;
    const sliceTo = sliceFrom + postPerPage;
    pagedPosts.push({
      number: pageNumber,
      posts: allPosts.slice(sliceFrom, sliceTo),
      first: pageNumber === 1,
      last: pageNumber === numberOfPages,
    });
  }
  return pagedPosts;
};
