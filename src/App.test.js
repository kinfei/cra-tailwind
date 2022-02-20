import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tailwind CSS", () => {
  render(<App />);
  const linkElement = screen.getByText(/“Tailwind CSS/i);
  expect(linkElement).toBeInTheDocument();
});
