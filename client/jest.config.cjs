module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(svg|png)$": "<rootDir>/photoTransform.ts"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^public/(.*)$': '<rootDir>/public/$1',
    "\\.(svg|png)$": "<rootDir>/src/tests/mocks/fileMock.ts",
  },
};