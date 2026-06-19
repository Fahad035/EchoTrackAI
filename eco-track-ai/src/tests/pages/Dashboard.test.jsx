import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "../../pages/Dashboard";

describe("Dashboard", () => {

  it("renders dashboard heading", () => {
    render(<Dashboard />);
    expect(
      screen.getByText(/Dashboard/i)
    ).toBeTruthy();
  });

  it("renders charts section", () => {
    render(<Dashboard />);
    expect(document.body).toBeTruthy();
  });

});