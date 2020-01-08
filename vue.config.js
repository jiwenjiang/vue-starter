const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// console.log("dddddddddddddddddddddddd")
const plugins = process.env.NODE_ENV === 'production' ? [
  new PrerenderSPAPlugin({
    // Required - The path to the webpack-outputted app to prerender.
    staticDir: path.join(__dirname, './dist'),
    // Required - Routes to render.
    routes: ['/'],
    ignoreJSErrors: true,
    renderer: new Renderer({
      headless: false,
      renderAfterDocumentEvent: 'render-event'
    })
  })
] : []
module.exports = {
  configureWebpack: {
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|lq_vernder|mapbox-gl)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }
}
