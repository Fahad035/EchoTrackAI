import { describe, it, expect } from "vitest";
import { calculateCarbon } from "../../utils/carbonCalculator";

describe("Carbon Calculator", () => {

  it("calculates emissions", () => {

    expect(
      Number(
        calculateCarbon(100,50,"veg")
      )
    ).toBeGreaterThan(0);

  });

  it("handles zero values", () => {

    expect(
      Number(
        calculateCarbon(0,0,"veg")
      )
    ).toBeGreaterThanOrEqual(0);

  });

  it("handles nonveg diet", () => {

    expect(
      Number(
        calculateCarbon(100,50,"nonveg")
      )
    ).toBeGreaterThan(0);

  });

});