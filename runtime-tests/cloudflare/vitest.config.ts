// import { defineConfig } from "vitest/config";
import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineWorkersConfig({
    plugins: [tsconfigPaths()],
    test: {
        poolOptions: {
            workers: {
                main: path.join(__dirname, "./worker.ts"),
                miniflare: {
                    modules: true,
                    compatibilityFlags: ["nodejs_compat"],
                    compatibilityDate: "2024-10-31",
                },
            },
        },
        alias: {
            "@": new URL("../../src/", import.meta.url).pathname,
        },
        globals: true,
        include: ["**/runtime-tests/cloudflare/**/(*.)+(test).+(ts|tsx)"],
        exclude: ["**/runtime-tests/cloudflare/vitest.config.ts"],
    },
});
