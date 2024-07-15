module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "jest-css-modules-transform",
  },
};
