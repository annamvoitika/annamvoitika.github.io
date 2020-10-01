import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders the main page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Anna/i);
  expect(linkElement).toBeInTheDocument();
});
