const path = require('path');

module.exports = {
  roots: [path.resolve(__dirname, 'src')],
  testRegex: "src/.*\\.test\\.tsx?$",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  verbose: false,
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"]
};
