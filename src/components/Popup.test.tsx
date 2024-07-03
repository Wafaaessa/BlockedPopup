import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Popup from "./Popup";
import "@testing-library/jest-dom/extend-expect";

describe("Popup Component", () => {
  it("renders popup with correct content", () => {
    const closePopup = jest.fn();
    render(<Popup closePopup={closePopup} />);

    expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
    expect(
      screen.getByText("You are blocked, please contact us.")
    ).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls closePopup function when Cancel button is clicked", () => {
    const closePopup = jest.fn();
    render(<Popup closePopup={closePopup} />);

    fireEvent.click(screen.getByText("Cancel"));

    expect(closePopup).toHaveBeenCalledTimes(1);
  });
});
