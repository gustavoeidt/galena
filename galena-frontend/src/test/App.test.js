import React from "react";
import { render } from "./test-utils";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
