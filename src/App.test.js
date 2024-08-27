import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UpvoteButton from "./components/UpvoteButton";

test("toggles button selection state on click", () => {
  // Mock onToggle function
  const onButtonToggle = jest.fn();

  // Render a test UpvoteButton
  const { rerender } = render(
    <UpvoteButton isSelected={false} onButtonToggle={onButtonToggle} />
  );

  // Query the button by its role
  const upvoteButton = screen.getByRole("button");

  // Ensure the button is initially not selected
  expect(upvoteButton).not.toHaveClass("selected");

  // Movcking click of the button
  fireEvent.click(upvoteButton);

  // Check that the onToggle function was called exactly once
  expect(onButtonToggle).toHaveBeenCalledTimes(1);

  // Simulate updating the state to selected (for testing purposes)
  rerender(<UpvoteButton isSelected={true} onButtonToggle={onButtonToggle} />);

  // Ensure the button is now selected
  expect(upvoteButton).toHaveClass("selected");
});
