import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it("renders Home link", () => {
    expect(
      screen.getAllByText(/Home/i).length
    ).toBeGreaterThan(0);
  });

  it("renders Dashboard link", () => {
    expect(
      screen.getAllByText(/Dashboard/i).length
    ).toBeGreaterThan(0);
  });

  it("renders logo", () => {
    expect(
      screen.getByText(/EcoTrack AI/i)
    ).toBeTruthy();
  });
});