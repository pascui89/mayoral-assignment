import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/search-bar";

describe("SearchBar", () => {
  it("renders search input correctly", () => {
    const mockOnSearch = jest.fn();

    render(<SearchBar searchTerm="" onSearch={mockOnSearch} />);

    expect(screen.getByPlaceholderText("Search products...")).toBeInTheDocument();
  });

  it("calls onSearch when input value changes", () => {
    const mockOnSearch = jest.fn();

    render(<SearchBar searchTerm="" onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search products...");
    fireEvent.change(input, { target: { value: "Test" } });

    expect(mockOnSearch).toHaveBeenCalledWith("Test");
  });
});