module.exports = {

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src/'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  coverageProvider: 'v8',

  testEnvironment: 'node',

};
