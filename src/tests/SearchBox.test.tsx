import { render, screen } from "@testing-library/react";
import { SearchBox } from "../components/SearchBox";

describe("SearchBox", () => {
  it("displays search input", () => {
    render(<SearchBox />);
    const searchbox = screen.getByRole("searchbox");
    expect(searchbox).toBeInTheDocument();
  });

  it("displays search button", () => {
    render(<SearchBox />);
    const button = screen.getByRole("button", { name: /zoek/i });
    expect(button).toBeInTheDocument();
  });
});
