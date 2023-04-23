import { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '.next'],
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
}

export default config
