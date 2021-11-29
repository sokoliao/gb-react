import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("message-list").length).toBe(1);
  expect(container.getElementsByClassName("new-message-wrapper").length).toBe(
    1
  );
});
