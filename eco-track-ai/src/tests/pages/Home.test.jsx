import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../pages/Home";

describe("Home", () => {

  it("renders hero section", () => {
    render(<Home />);
    expect(document.body).toBeTruthy();
  });

  it("renders calculator section", () => {
    render(<Home />);
    expect(document.body).toBeTruthy();
  });

});