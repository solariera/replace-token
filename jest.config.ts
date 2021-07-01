import type { Config } from '@jest/types';

/**
 * config
 * @see https://jestjs.io/docs/configuration
 */
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/*.spec.(ts|tsx|js)'],
};

export default config;
