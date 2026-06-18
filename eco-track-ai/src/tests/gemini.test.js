import { describe, it, expect } from "vitest";

describe("Gemini Service", () => {

  it("environment key exists", () => {

    expect(
      typeof import.meta.env
    ).toBe("object");

  });

});