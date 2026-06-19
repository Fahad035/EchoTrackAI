import { describe, it, expect } from "vitest";
import { calculateCarbon }
from "../../utils/carbonCalculator";

describe("Carbon Calculator", () => {

  it("calculates emissions", () => {
    expect(
      calculateCarbon(100, 50, "veg")
    ).toBeGreaterThan(0);
  });

  it("handles zero values", () => {
    expect(
      calculateCarbon(0, 0, "veg")
    ).toBeGreaterThanOrEqual(0);
  });

  it("handles nonveg diet", () => {
    expect(
      calculateCarbon(100, 50, "nonveg")
    ).toBeGreaterThan(0);
  });

});