import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UpvoteButton from "./components/UpvoteButton";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("toggles button selection state on click", () => {
//   render(<App />);

//   // Find the first upvote button by its role or text
//   const firstUpvoteButton = screen.getAllByRole("button", {
//     name: /arrow-up/i,
//   })[0];

//   // Check the initial state of the button (not selected)
//   expect(firstUpvoteButton).not.toHaveClass("selected");

//   // Click the button to toggle its state
//   fireEvent.click(firstUpvoteButton);

//   // Check the button's state after click (should be selected)
//   expect(firstUpvoteButton).toHaveClass("selected");

//   // Click the button again to toggle its state back
//   fireEvent.click(firstUpvoteButton);

//   // Check the button's state after second click (should not be selected)
//   expect(firstUpvoteButton).not.toHaveClass("selected");
// });

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
