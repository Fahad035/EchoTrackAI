import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loader from "../../components/Loader";

describe("Loader", () => {

  it("renders loading text", () => {

    render(<Loader />);

    expect(
      screen.getByText(/AI Sustainability Coach/i)
    ).toBeTruthy();

  });

});