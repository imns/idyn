import { type CryptoFactory } from "@/types";
import { randomBytes } from "node:crypto";

export class NodeCrypto implements CryptoFactory {
    generateRandomString(length: number): string {
        const byteLength = Math.ceil(length / 2);
        return randomBytes(byteLength).toString("hex");
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        throw new Error("Not implemented");
        return "";
    }

    async verifyPassword(password: string, hash: string): Promise<boolean> {
        throw new Error("Not implemented");
        return false;
    }
}
