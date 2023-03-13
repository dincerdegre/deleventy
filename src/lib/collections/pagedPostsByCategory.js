const siteData = require("../../_data/site.json");

module.exports = (coll) => {
  const categoryList = require("./categoryList")(coll);
  const postPerPage = siteData.paginate;
  const pagedPosts = [];

  Object.keys(categoryList).forEach((catName) => {
    const allPosts = require("./posts")(coll);
    const categoriedPosts = allPosts.filter((item) => {
      return item.data.category.toLowerCase() === catName;
    });
    const numberOfPages = Math.ceil(categoriedPosts.length / postPerPage);

    for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      const sliceFrom = (pageNumber - 1) * postPerPage;
      const sliceTo = sliceFrom + postPerPage;
      pagedPosts.push({
        catName,
        number: pageNumber,
        posts: categoriedPosts.slice(sliceFrom, sliceTo),
        first: pageNumber === 1,
        last: pageNumber === numberOfPages,
      });
    }
  });
  return pagedPosts;
};
