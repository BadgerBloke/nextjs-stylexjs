const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  pageExtensions: ["ts", "tsx"],
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
