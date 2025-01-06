import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { env, createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import worker from "./worker";

describe("Cloudflare", () => {
    it("Should return 200 response with the runtime key", async () => {
        const request = new Request("http://example.com/random");
        const ctx = createExecutionContext();
        const response = await worker.fetch(request, env, ctx);
        //     // Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
        await waitOnExecutionContext(ctx);
        expect(response.status).toBe(200);
        const text = await response.text();
        expect(text).toHaveLength(10);
    });

    it("Should return 200 response with the runtime key", async () => {
        const request = new Request("http://example.com/runtime");

        const ctx = createExecutionContext();
        const response = await worker.fetch(request, env, ctx);
        await waitOnExecutionContext(ctx);
        expect(response.status).toBe(200);
        const text = await response.text();
        expect(text).toBe("cloudflare");
    });
});
