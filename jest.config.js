module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**/*.jsx", "src/**/*.js"],
  setupFiles: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^.+\\.(css|less)$": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
