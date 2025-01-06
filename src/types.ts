export enum Runtime {
    Bun = "bun",
    Deno = "deno",
    Node = "node",
    Cloudflare = "cloudflare",
    Fastly = "fastly",
    Unknown = "unknown",
}

//
export interface CryptoFactory {
    generateRandomString(length: number): string;
    hashPassword(password: string, salt: string): Promise<string>;
    verifyPassword(password: string, hash: string): Promise<boolean>;
}
