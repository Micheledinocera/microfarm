module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/microfarm/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
};
