import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home", () => {

  it("renders calculator section", () => {

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Carbon Footprint Calculator/i)
    ).toBeTruthy();

  });

});