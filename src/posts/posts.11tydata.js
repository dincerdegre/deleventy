module.exports = {
  layout: "default",
  title: "Untitled",
  eleventyComputed: {
    permalink: (data) => `/content/${data.page.fileSlug}/index.html`,
    thumb: (data) => {
        if (data.thumb){
            if (data.thumb.search(/^https?:\/\//) !== -1) {
                return data.thumb;
            }
            return `/assets/images/${data.thumb}`;
        } else {
            return false;
        }
    }
  },
};
