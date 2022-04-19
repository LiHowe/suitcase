//https://jestjs.io/zh-Hans/docs/configuration#%E9%BB%98%E8%AE%A4%E5%80%BC
import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node'
}

export default config
