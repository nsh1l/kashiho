module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addWatchTarget("css/");
  return {
    dir: {
      input: ".",
      include: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
