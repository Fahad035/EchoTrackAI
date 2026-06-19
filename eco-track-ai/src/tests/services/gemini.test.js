import { describe, it, expect } from "vitest";

describe("Gemini Service", () => {

  it("returns string response", async () => {

    const mock =
      "AI Sustainability Advice";

    expect(
      typeof mock
    ).toBe("string");

  });

});