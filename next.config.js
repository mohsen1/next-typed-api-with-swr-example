const withNextJsTypedApiWithSwrPlugin = require("next-typed-api-with-swr");

module.exports = withNextJsTypedApiWithSwrPlugin(
  {},
  {
    outputFilePath: "__generated__/swr-api-types.ts",
  }
);
