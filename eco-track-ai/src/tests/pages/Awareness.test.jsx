import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Awareness from "../pages/Awareness";

describe("Awareness", () => {

  it("renders awareness heading", () => {
    render(<Awareness />);
    expect(
      screen.getByText(/Reduce Carbon Footprint/i)
    ).toBeTruthy();
  });

  it("renders pledge button", () => {
    render(<Awareness />);
    expect(
      screen.getByText(/Take The Green Pledge/i)
    ).toBeTruthy();
  });

});