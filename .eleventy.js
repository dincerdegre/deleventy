const eleventySass = require("eleventy-sass");

module.exports = (config) => {
    config.addPlugin(eleventySass);
    config.setDataDeepMerge(true);
    config.addLayoutAlias('default', 'layouts/default.njk');
    config.addLayoutAlias('page','layouts/page.njk');
    config.addLayoutAlias('post', 'layouts/post.njk');
    config.addPassthroughCopy('src/assets/images/**/*');
    config.addPassthroughCopy({'src/assets/images/': '/assets/images'});
    config.addPassthroughCopy({'src/posts/images/': '/assets/images'});

    config.addFilter('minifyJs', require('./src/lib/filters/minifyJs'));
    config.addFilter('readableDate', require('./src/lib/filters/readableDate'));
    config.addFilter('readableDateFull', require('./src/lib/filters/readableDateFull'));
    config.addFilter('slugMaker', require('./src/lib/filters/slugMaker'));
    config.addFilter('capitalize', require('./src/lib/filters/capitalize'));
    config.addCollection('posts',require('./src/lib/collections/posts'));
    config.addCollection('pagedPosts',require('./src/lib/collections/pagedPosts'));
    config.addCollection('featuredPosts',require('./src/lib/collections/featuredPosts'));

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        templateFormats: ['md', 'njk', 'html'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
};