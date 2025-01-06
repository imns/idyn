import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        include: ["**/runtime-tests/node/**/(*.)+(test).+(ts|tsx)"],
        exclude: ["**/runtime-tests/node/vitest.config.ts"],
        environment: "node",
        coverage: {
            reporter: ["text", "json", "html"],
            exclude: ["node_modules/", "build.ts"],
        },
        alias: {
            "@": new URL("../../src/", import.meta.url).pathname,
        },
    },
});
