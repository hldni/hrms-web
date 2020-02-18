module.exports = {
  "transpileDependencies": [
    "vuetify",
  ],
 lintOnSave: false,
  devServer: {
	open: true,
	host: 'localhost',
	port: 8066,
	proxy: {
	  '/': {
		  target: 'http://127.0.0.1:8081',  // target host
		  ws: true,  // proxy websockets
		  changeOrigin: true,  // needed for virtual hosted sites
		  pathRewrite: {
			  '^/': ''  // rewrite path
		  }
	  },
	}, 
  }
}