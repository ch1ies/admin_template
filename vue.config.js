module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue' : '/',
    devServer: {
        port: 1613,
        // host: '0.0.0.0',
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9527',
                changeOrigin: true,
            }
        }
    }
}