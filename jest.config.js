/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  setupTestFrameworkScriptFile: './test/e2e/jest.image.ts',
  setupFilesAfterEnv: [
    './test/e2e/jest.image.ts',
    'expect-puppeteer'
  ],
};