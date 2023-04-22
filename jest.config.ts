import { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '.next'],
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

export default config
