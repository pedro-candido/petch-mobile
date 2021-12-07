module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        "alias": {
          "@petch": "./src",
          "@petch/components": "./src/components",
          "@petch/pages": "./src/pages",
          "@petch/constants": "./src/constants",
          "@petch/theme": "./src/theme",
          "@petch/styles": "./src/styles",
          "@petch/reducers": "./src/reducers",
          "@petch/routes": "./src/routes",
          "@petch/store": "./src/store",
        }
      }]
    ]
  };
};
