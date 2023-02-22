const preset = 'ts-jest'
const coverageDirectory = 'coverage'
const testEnvironment = 'jsdom'
const setupFilesAfterEnv = ['<rootDir>/jest.setup.js']

// transform
const transform = {
  '^.+\\.tsx?$': 'ts-jest',
  '^.+\\.jsx?$': 'babel-jest',
}
const transformIgnorePatterns = ['<rootDir>/node_modules/']

// map
const moduleNameMapper = {
  '^.+\\.svg$': 'jest-svg-transformer',
  '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
    'identity-obj-proxy',
}

// coverage
const collectCoverage = true
const collectCoverageFrom = ['src/**/*.{js,jsx}']

export default {
  preset,
  collectCoverage,
  collectCoverageFrom,
  coverageDirectory,
  testEnvironment,
  setupFilesAfterEnv,
  transform,
  transformIgnorePatterns,
  moduleNameMapper,
}
