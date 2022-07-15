const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = function override(config, env) {
  config.module.rules[0] = {
    test: /\.js$/,
    loader: "esbuild-loader",
    options: {
      loader: "jsx",
      target: "es2018",
    },
  };

  const minimize = config.optimization.minimize;

  if (minimize) {
    config.optimization.minimizer = [
      new ESBuildMinifyPlugin({
        target: "es2018",
        css: true,
      }),
    ];
  }

  console.log([...config.module.rules[1].oneOf]);
  process.exit(0);
  //   return config;
};
