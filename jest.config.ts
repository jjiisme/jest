import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/pass_checker';
const baseTestDir = '<rootDir>/src/test/pass_checker';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // 控制是否在终端显示每个测试文件中 每个测试用例的运行结果
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // '<rootDir>/src/app/**/*.ts'
    `${baseDir}/**/*.ts`,
  ],
  // 用于指定 哪些文件 会被 Jest 当作测试文件来运行
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
