import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        include: ["./src/**/(*.)+(test).+(ts|tsx)"],
        environment: "node",
        coverage: {
            reporter: ["text", "json", "html"],
            exclude: ["node_modules/", "build.ts"],
        },
        alias: {
            "@": new URL("./src", import.meta.url).pathname,
        },
    },
});
