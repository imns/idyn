import { type CryptoFactory } from "@/types";

export class SubtleCryptoWrapper implements CryptoFactory {
    generateRandomString(length: number): string {
        // Handles odd numbers
        // Half the length since 1 byte = 2 hex chars
        const byteLength = Math.ceil(length / 2);
        const array = new Uint8Array(byteLength);
        crypto.getRandomValues(array);
        let hexString = Array.from(array)
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join("");
        return hexString.substring(0, length); // Trim to the desired length (for odd numbers)
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
