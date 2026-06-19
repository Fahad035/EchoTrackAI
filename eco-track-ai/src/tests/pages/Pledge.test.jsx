import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pledge from "../../pages/Pledge";

describe("Pledge Page", () => {

  it("renders pledge heading", () => {
    render(<Pledge />);

    expect(
      screen.getByText(/Take The Green Pledge/i)
    ).toBeTruthy();
  });

  it("renders full name input", () => {
    render(<Pledge />);

    expect(
      screen.getByPlaceholderText(/Full Name/i)
    ).toBeTruthy();
  });

  it("renders email input", () => {
    render(<Pledge />);

    expect(
      screen.getByPlaceholderText(/Email/i)
    ).toBeTruthy();
  });

  it("renders city input", () => {
    render(<Pledge />);

    expect(
      screen.getByPlaceholderText(/City/i)
    ).toBeTruthy();
  });

  it("renders generate certificate button", () => {
    render(<Pledge />);

    expect(
      screen.getByText(/Generate Certificate/i)
    ).toBeTruthy();
  });

  it("shows certificate after form submission", () => {
    render(<Pledge />);

    fireEvent.change(
      screen.getByPlaceholderText(/Full Name/i),
      {
        target: {
          value: "Md Fahad"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/Email/i),
      {
        target: {
          value: "fahad@test.com"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/City/i),
      {
        target: {
          value: "Hyderabad"
        }
      }
    );

    fireEvent.click(
      screen.getByText(/Generate Certificate/i)
    );

    expect(
      screen.getByText(/GREEN PLEDGE CERTIFICATE/i)
    ).toBeTruthy();
  });

  it("shows user name on certificate", () => {
    render(<Pledge />);

    fireEvent.change(
      screen.getByPlaceholderText(/Full Name/i),
      {
        target: {
          value: "Md Fahad"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/Email/i),
      {
        target: {
          value: "fahad@test.com"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/City/i),
      {
        target: {
          value: "Hyderabad"
        }
      }
    );

    fireEvent.click(
      screen.getByText(/Generate Certificate/i)
    );

    expect(
      screen.getByText("Md Fahad")
    ).toBeTruthy();
  });

  it("shows city on certificate", () => {
    render(<Pledge />);

    fireEvent.change(
      screen.getByPlaceholderText(/Full Name/i),
      {
        target: {
          value: "Md Fahad"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/Email/i),
      {
        target: {
          value: "fahad@test.com"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/City/i),
      {
        target: {
          value: "Hyderabad"
        }
      }
    );

    fireEvent.click(
      screen.getByText(/Generate Certificate/i)
    );

    expect(
      screen.getByText("Hyderabad")
    ).toBeTruthy();
  });

  it("shows certificate id after submission", () => {
    render(<Pledge />);

    fireEvent.change(
      screen.getByPlaceholderText(/Full Name/i),
      {
        target: {
          value: "Md Fahad"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/Email/i),
      {
        target: {
          value: "fahad@test.com"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/City/i),
      {
        target: {
          value: "Hyderabad"
        }
      }
    );

    fireEvent.click(
      screen.getByText(/Generate Certificate/i)
    );

    expect(
      screen.getByText(/Certificate ID/i)
    ).toBeTruthy();
  });

  it("shows print certificate button", () => {
    render(<Pledge />);

    fireEvent.change(
      screen.getByPlaceholderText(/Full Name/i),
      {
        target: {
          value: "Md Fahad"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/Email/i),
      {
        target: {
          value: "fahad@test.com"
        }
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/City/i),
      {
        target: {
          value: "Hyderabad"
        }
      }
    );

    fireEvent.click(
      screen.getByText(/Generate Certificate/i)
    );

    expect(
      screen.getByText(/Print Certificate/i)
    ).toBeTruthy();
  });

});