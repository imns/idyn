import { Runtime } from "@/types";

/**
 * Determines the runtime environment.
 * @returns The runtime environment.
 */
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

/**
 * Generates a session expiry date string.
 * @param days - The number of days until the session expires.
 * @returns The expiry date string in ISO format.
 */
export function getSessionExpiryDate(days: number = 30): string {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * days).toISOString();
}

/**
 * Checks if a session is expired based on the expiresAt date.
 * @param expiresAt - The expiresAt date of the session.
 * @returns True if the session is expired, false otherwise.
 */
export function isSessionExpired(expiresAt: string): boolean {
    return Date.now() >= (expiresAt ? new Date(expiresAt).getTime() : 0) - 1000 * 60 * 60 * 24 * 15;
}

/**
 * Safely parses a URL.
 * @param url - The URL to parse.
 * @returns The parsed URL or null if parsing fails.
 */
export function safeURL(url: URL | string): URL | null {
    try {
        return new URL(url);
    } catch {
        return null;
    }
}
