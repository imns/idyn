import { describe, it, expect } from "vitest";
import { getCrypto } from "../../src/helpers/crypto";
import { getRuntime } from "../../src/helpers/utils";

describe("Node", () => {
    it("should generate a random string", () => {
        const crypto = getCrypto();
        const randomString = crypto.generateRandomString(10);
        expect(randomString).toHaveLength(10);
    });

    it("should return the runtime key", () => {
        const runtime = getRuntime();
        expect(runtime).toBe("node");
    });
});
