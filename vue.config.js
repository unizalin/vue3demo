module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    proxy: 'http://localhost:8080',
  },  
  publicPath: './'
}