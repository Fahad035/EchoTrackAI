import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CarbonForm from "../components/CarbonForm";

describe("CarbonForm", () => {

  it("renders calculator heading", () => {
    render(<CarbonForm />);
    expect(
      screen.getByText(/Carbon Footprint Calculator/i)
    ).toBeTruthy();
  });

  it("renders car travel input", () => {
    render(<CarbonForm />);
    expect(
      screen.getByPlaceholderText(/Enter kilometers/i)
    ).toBeTruthy();
  });

  it("renders electricity input", () => {
    render(<CarbonForm />);
    expect(
      screen.getByPlaceholderText(/Enter units/i)
    ).toBeTruthy();
  });

  it("renders calculate button", () => {
    render(<CarbonForm />);
    expect(
      screen.getByText(/Calculate Carbon Footprint/i)
    ).toBeTruthy();
  });

  it("shows validation error", () => {
    render(<CarbonForm />);
    fireEvent.click(
      screen.getByText(/Calculate Carbon Footprint/i)
    );

    expect(
      screen.getByText(/Please fill in all fields/i)
    ).toBeTruthy();
  });

  it("accepts user input", () => {
    render(<CarbonForm />);

    const input =
      screen.getByPlaceholderText(/Enter kilometers/i);

    fireEvent.change(input, {
      target: { value: "500" }
    });

    expect(input.value).toBe("500");
  });

});