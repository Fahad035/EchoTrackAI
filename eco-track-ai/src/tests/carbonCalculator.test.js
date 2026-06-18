import { describe, it, expect } from "vitest";
import {
  calculateCarbon,
  calculateCarbonBreakdown
} from "../utils/carbonCalculator";

describe("Carbon Calculator", () => {

  it("should calculate total footprint", () => {

    const result =
      calculateCarbon(
        100,
        100,
        "veg"
      );

    expect(Number(result))
      .toBeGreaterThan(0);

  });

  it("should return breakdown", () => {

    const breakdown =
      calculateCarbonBreakdown(
        100,
        100,
        "veg"
      );

    expect(
      breakdown.transportEmission
    ).toBe(21);

    expect(
      breakdown.electricityEmission
    ).toBe(82);

  });

});