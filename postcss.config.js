module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1920,
      selectorBlackList: ['no2vw'] // 例如 selectorBlackList 为 ['body'] 的话， 那么 .body-class 就会被忽略
    }
  }
}
