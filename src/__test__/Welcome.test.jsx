import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Correct mounted Welcome", () => {
  it("mounted Welcome correctly", () => {
    render(<Welcome />);

    const welcome = screen.getByText(/Benvenuti in EpiBooks!/i);

    expect(welcome).toBeInTheDocument();
  });
});
