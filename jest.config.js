module.exports = {

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**'
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src/'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  coverageProvider: 'v8',

  testEnvironment: 'node',

};
