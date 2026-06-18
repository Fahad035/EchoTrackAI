import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { describe, it, expect } from "vitest";

describe("Navbar", () => {

  it("renders navbar", () => {

    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      getByText("EcoTrack AI")
    ).toBeTruthy();

  });

});