const withPWA=require('next-pwa')
module.exports = withPWA({
  pwa:{dest:'public'},
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  images: {
    domains: ["gogocdn.net"],
  },
  env: {
    key: process.env.ak_2nWhqVNQ50sCkfyYrT5S0qQU1n4,
    URL: process.env.https://api.ngrok.com/api_keys/ak_2nJI0PJPuDJg91sWnQpznTZKZqM,
  },
});
