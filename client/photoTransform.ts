module.exports = {
  process() {
    const processedCode = 'module.exports = {};';
    return { code: processedCode };
  },
  getCacheKey() {
    return 'photoTransform';
  },
};
