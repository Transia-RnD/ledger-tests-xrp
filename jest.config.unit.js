/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/unit/**/*.test.ts'],
  // testPathIgnorePatterns: [''],

  // Set the timeout value for all tests to 2 minutes (default is 5 seconds)
  testTimeout: 120000,
}
