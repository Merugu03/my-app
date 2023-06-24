const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // The path you want to proxy
    createProxyMiddleware({
      target: 'https://api.cloudinary.com/v1_1', // The Cloudinary API base URL
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix when forwarding the request
      },
    })
  );
};
