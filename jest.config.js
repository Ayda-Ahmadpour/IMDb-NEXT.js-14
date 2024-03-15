const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "./src/components/$1",
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
