module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    moduleNameMapper: {
        "\\.scss$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
    roots: ["<rootDir>"],
    testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    collectCoverage: true,
    coverageReporters: ["json", "html"],
};