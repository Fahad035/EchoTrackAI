import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Awareness from "../../pages/Awareness";

describe("Awareness", () => {

  it("renders page", () => {
    render(
      <MemoryRouter>
        <Awareness />
      </MemoryRouter>
    );

    expect(document.body).toBeTruthy();
  });

  it("contains awareness content", () => {
    render(
      <MemoryRouter>
        <Awareness />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Carbon Awareness/i)
    ).toBeTruthy();
  });

});