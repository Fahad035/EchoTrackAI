import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {

  it("renders logo", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/EcoTrack AI/i)
    ).toBeTruthy();
  });

  it("renders Home link", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/Home/i)
    ).toBeTruthy();
  });

  it("renders Dashboard link", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/Dashboard/i)
    ).toBeTruthy();
  });

  it("renders Awareness link", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/Awareness/i)
    ).toBeTruthy();
  });

  it("renders Contact link", () => {
    render(<Navbar />);
    expect(
      screen.getByText(/Contact/i)
    ).toBeTruthy();
  });

});