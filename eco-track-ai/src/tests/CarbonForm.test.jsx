import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CarbonForm from "../components/CarbonForm";

describe("CarbonForm", () => {

  it("renders calculator title", () => {

    render(<CarbonForm />);

    expect(
      screen.getByText(/Carbon Footprint Calculator/i)
    ).toBeInTheDocument();

  });

  it("renders calculate button", () => {

    render(<CarbonForm />);

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();

  });

});