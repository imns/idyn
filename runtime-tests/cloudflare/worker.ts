import { getCrypto } from "../../src/helpers/crypto";
import { getRuntime } from "../../src/helpers/utils";

interface Env {}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);
        console.log(`URL: ${url.pathname}`);

        switch (url.pathname) {
            case "/random":
                const crypto = getCrypto();
                const randomString = crypto.generateRandomString(10);
                console.log(`Runtime: ${getRuntime()}`);
                return new Response(randomString);
            case "/runtime":
                return new Response(getRuntime());
        }
        return new Response("Not found", { status: 404 });
    },
} satisfies ExportedHandler<Env>;
