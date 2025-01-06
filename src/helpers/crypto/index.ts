import { getRuntime } from "@/helpers/utils";
import { Runtime, type CryptoFactory } from "@/types";
import { SubtleCryptoWrapper } from "@/helpers/crypto/subtle";
import { NodeCrypto } from "@/helpers/crypto/node";

export function getCrypto(): CryptoFactory {
    const runtime = getRuntime();

    if (runtime === Runtime.Unknown) {
        throw new Error("Unsupported environment");
    }

    if (runtime === Runtime.Cloudflare) {
        return new SubtleCryptoWrapper();
    }
    return new NodeCrypto();
}
