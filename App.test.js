import React from "react";

import { render } from "@testing-library/react-native";

import App from "./App";
it("renders Abhishek Perfectly", () => {
  const { getAllByText, getByPlaceholderText } = render(<App />);
  expect(getAllByText("Abhishek").length).toBe(1);
  getByPlaceholderText("Ashish");
});
it("shows invalid", () => {
  render(<App />);
});
