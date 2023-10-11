import React from "react";
import { render } from "./test-utils";
import { coursesList } from "./test-mocks";
import coursesResource from "../api/courses";
import App from "../App";

describe("App", () => {
  it("should render the main page", async () => {
    const { getByText } = await render(<App />);
    expect(getByText("Mestrado em Ciências Biológicas")).toBeInTheDocument();
  });
});
