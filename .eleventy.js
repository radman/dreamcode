module.exports = function(eleventyConfig) {
  // Set directories to pass through to the _site folder
  eleventyConfig.addPassthroughCopy("_src/assets/images/");

  return {
    dir: {
      input: "_src",
      output: "_site"
    }
  };
};
