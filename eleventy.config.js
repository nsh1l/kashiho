module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: ".",
      include: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
