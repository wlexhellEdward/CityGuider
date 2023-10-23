module.exports = {
    process(src, filename, config, options) {
      const processedCode = 'module.exports = {};';
      return { code: processedCode };
    },
    getCacheKey(src, filename, config, options) {
      return 'photoTransform';
    },
  };
  