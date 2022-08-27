module.exports = {
  pwa: {
    name: "lux.minima",
    themeColor: "#7E000D"
  },

  configureWebpack: {
    module: {
      rules: [{ test: /\.txt$/, use: "raw-loader" }]
    }
  },
  // workboxPluginMode: 'GenerateSW',
  // workboxOptions: {
  //   exclude: [/\.map$/, /_redirects/],
  //   // ...other Workbox options...
  // },
  pluginOptions: {
    apollo: {
      serverFolder: ""
    }
  }
};
