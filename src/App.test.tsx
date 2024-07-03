import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("App Component", () => {
  it("renders App component with Popup when blocked is true", () => {
    render(<App />);

    expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
    expect(
      screen.getByText("You are blocked, please contact us.")
    ).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("closes Popup when Cancel button is clicked", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByText("Something Went Wrong")).toBeNull();
    expect(
      screen.queryByText("You are blocked, please contact us.")
    ).toBeNull();
    expect(screen.queryByText("Cancel")).toBeNull();
  });
});
