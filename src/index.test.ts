import { expect, test } from "vitest";
import { greeting } from "./index";

test("greeting returns correct message", () => {
    expect(greeting("Test")).toBe("Hello, Test!");
});
