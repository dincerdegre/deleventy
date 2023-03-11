const eleventySass = require("eleventy-sass");

module.exports = (config) => {
    config.addPlugin(eleventySass);
    config.setDataDeepMerge(true);
    config.addLayoutAlias('default', 'layouts/default.njk');
    config.addPassthroughCopy('src/assets/images/**/*');
    config.addPassthroughCopy({'src/assets/images/': '/assets/images'});
    config.addPassthroughCopy({'src/posts/images/': '/assets/images'});

    config.addFilter('minifyJs', require('./lib/filters/minifyJs'));
    config.addFilter('readableDate', require('./lib/filters/readableDate'));
    config.addFilter('readableDateFull', require('./lib/filters/readableDateFull'));
    config.addFilter('slugMaker', require('./lib/filters/slugMaker'));
    config.addFilter('capitalize', require('./lib/filters/capitalize'));
    config.addCollection('posts',require('./lib/collections/posts'));
    config.addCollection('pagedPosts',require('./lib/collections/pagedPosts'));
    config.addCollection('featuredPosts',require('./lib/collections/featuredPosts'));

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