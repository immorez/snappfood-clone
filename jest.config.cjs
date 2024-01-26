module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    moduleNameMapper: {
        "\\.scss$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleDirectories: ["node_modules", "src"],
    collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
    roots: ["<rootDir>"],
    testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
    coverageReporters: ["json", "html"],
};
