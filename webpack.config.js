const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    // customizations can go here
    plugins: [new SystemJSPublicPathPlugin()],
  });
};
