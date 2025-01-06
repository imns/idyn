import { Runtime } from "@/types";

export function getRuntime(): Runtime {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any;

    const CLOUDFLARE_WORKERS_NAVIGATOR = "Cloudflare-Workers";

    if (global.navigator?.userAgent === CLOUDFLARE_WORKERS_NAVIGATOR) {
        return Runtime.Cloudflare;
    }
    if (global?.Deno !== undefined) {
        return Runtime.Deno;
    }

    if (global?.Bun !== undefined) {
        return Runtime.Bun;
    }

    if (global?.fastly !== undefined) {
        return Runtime.Fastly;
    }

    if (typeof global?.process !== "undefined" && global?.process?.versions?.node) {
        return Runtime.Node;
    }

    return Runtime.Unknown;
}
