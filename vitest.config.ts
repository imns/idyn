import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["src/**/*.test.ts"],
        environment: "node",
        coverage: {
            reporter: ["text", "json", "html"],
            exclude: ["node_modules/", "build.ts"],
        },
    },
});
