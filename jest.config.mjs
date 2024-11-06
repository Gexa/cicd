export default {
    preset: 'ts-jest',
    coveragePathIgnorePatterns: [],
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/.*/dist'],
    moduleDirectories: ['node_modules', 'src'],
}