const path = require("path");

module.exports = {
  transpileDependencies: ["@vue/cli-service"],
  configureWebpack: {
    // https://github.com/vueuse/vueuse/issues/718
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@plugins": path.resolve(__dirname, "src/js/plugins"),
        "@helpers": path.resolve(__dirname, "src/js/helpers"),
        "@config": path.resolve(__dirname, "src/js/config"),
        "@views": path.resolve(__dirname, "src/views"),
        "@": path.resolve(__dirname, ""),
      },
    },
  },
};
