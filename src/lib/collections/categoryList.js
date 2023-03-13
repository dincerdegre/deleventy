
function fromEntries (iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
  
      return obj;
    }, {});
  }
module.exports = (coll) => {
  const allPosts = require("./posts")(coll);
  const categoryListArray = allPosts
    .reduce((cats, post) => {
      if ("category" in post.data) {
        cats = cats.concat([post.data.category.toLowerCase()]);
      }
      return [...new Set(cats)];
    }, [])
    .map((cat) => [
      cat,
      allPosts.filter((item) => {
        return item.data.category.toLowerCase() === cat;
      }).length,
    ]).sort((a,b)=> b[1] - a[1]);
  return fromEntries(categoryListArray);
};
