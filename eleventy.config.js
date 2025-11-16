module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.ignores.add("README.md");
  return {
    dir: {
      input: ".",
      include: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
