import { describe, expect, it } from "vitest";
import { getSessionExpiryDate, isSessionExpired, safeURL } from "./utils";

describe("getSessionExpiryDate", () => {
    it("should return a date 30 days in the future by default", () => {
        const result = getSessionExpiryDate();
        const expectedDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        // Compare the timestamps rounded to seconds for stability
        expect(Math.floor(new Date(result).getTime() / 1000)).toBe(
            Math.floor(expectedDate.getTime() / 1000)
        );
    });

    it("should return a date with custom days", () => {
        const result = getSessionExpiryDate(5);
        const expectedDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5);
        expect(Math.floor(new Date(result).getTime() / 1000)).toBe(
            Math.floor(expectedDate.getTime() / 1000)
        );
    });
});

describe("isSessionExpired", () => {
    it("should return true for past dates", () => {
        const pastDate = new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 16
        ).toISOString();
        expect(isSessionExpired(pastDate)).toBe(true);
    });

    it("should return false for future dates", () => {
        const futureDate = new Date(
            Date.now() + 1000 * 60 * 60 * 24 * 16
        ).toISOString();
        expect(isSessionExpired(futureDate)).toBe(false);
    });

    it("should return true for invalid dates", () => {
        expect(isSessionExpired("")).toBe(true);
    });
});

describe("safeURL", () => {
    it("should parse valid URLs", () => {
        const url = "https://example.com/path?query=1";
        const result = safeURL(url);
        expect(result).toBeInstanceOf(URL);
        expect(result?.href).toBe(url);
    });

    it("should handle URL instances", () => {
        const urlInstance = new URL("https://example.com");
        const result = safeURL(urlInstance);
        expect(result).toBeInstanceOf(URL);
        expect(result?.href).toBe(urlInstance.href);
    });

    it("should return null for invalid URLs", () => {
        expect(safeURL("not-a-url")).toBeNull();
        expect(safeURL("http://")).toBeNull();
    });
});
