module.exports = {
    rootDir: '../..',
    roots: ['./test/e2e', './src'],
    transform: { '^.+\\.ts?$': 'ts-jest' },
    testMatch: ['**/?(*.)+(spec|test).[t]s'],
    testPathIgnorePatterns: ['/node_modules/', 'dist', 'src'],
    testTimeout: 200000,
    preset: 'jest-puppeteer',
}