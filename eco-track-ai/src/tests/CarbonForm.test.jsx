import { render, screen } from "@testing-library/react";

import CarbonForm from "../components/CarbonForm";

import { describe, it, expect } from "vitest";

describe("CarbonForm", () => {

  it("renders calculator title", () => {

    render(<CarbonForm />);

    expect(
      screen.getByText(
        /Carbon Footprint Calculator/i
      )
    ).toBeDefined();

  });

});