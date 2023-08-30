import { render, screen } from "@testing-library/react";
import { SearchBox } from "../components/SearchBox";

// FIXME: SearchBox expects props

describe("SearchBox", () => {
  it("displays search input", () => {
    // @ts-ignore
    render(<SearchBox />);
    const searchbox = screen.getByRole("searchbox");
    expect(searchbox).toBeInTheDocument();
  });

  it("displays search button", () => {
    // @ts-ignore
    render(<SearchBox />);
    const button = screen.getByRole("button", { name: /zoek/i });
    expect(button).toBeInTheDocument();
  });
});
