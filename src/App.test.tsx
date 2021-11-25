import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const messageElement = screen.getByText(/Hello World/i);
  expect(messageElement).toBeInTheDocument();
});
