const path = require('path');
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  transpilePackages: ["@stylexjs/open-props"],
};

module.exports = stylexPlugin({
  aliases: {
    '~/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})(nextConfig);
