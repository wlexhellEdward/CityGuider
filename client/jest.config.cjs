/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(svg|png)$": "<rootDir>/photoTransform.ts"
 },
  moduleNameMapper: {
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^public/(.*)$': '<rootDir>/public/$1',
    "\\.(svg|png)$": "<rootDir>/src/tests/mocks/fileMock.ts",
    "\\.(css|sass)$": "<rootDir>/src/tests/mocks/styleMock.ts"
  },
};