import * as esbuild from "esbuild";

const buildOptions = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    target: "node20",
    outdir: "dist",
    format: "esm",
    sourcemap: true,
    minify: process.env.NODE_ENV === "production",
};

try {
    await esbuild.build(buildOptions);
    console.log("⚡ Build complete! ⚡");
} catch (err) {
    console.error("Build failed:", err);
    process.exit(1);
}
