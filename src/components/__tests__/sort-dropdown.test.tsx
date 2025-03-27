"use client"

import { render, screen, fireEvent } from "@testing-library/react";
import SortDropdown from "@/components/sort-dropdown";

// Simplificamos el mock para evitar problemas con displayName
jest.mock("@/components/ui/select", () => ({
  Select: ({ children, value, onValueChange }) => (
    <div data-testid="select-root" onClick={() => onValueChange && onValueChange("price-asc")}>
      {children}
      <span>Current value: {value}</span>
    </div>
  ),
  SelectTrigger: ({ children }) => <button data-testid="select-trigger">{children}</button>,
  SelectValue: ({ placeholder }) => <span>{placeholder}</span>,
  SelectContent: ({ children }) => <div data-testid="select-content">{children}</div>,
  SelectItem: ({ children, value }) => <div data-testid={`select-item-${value}`}>{children}</div>,
}))

describe("SortDropdown", () => {
  it("renders with the correct sort option selected", () => {
    render(<SortDropdown sortOption="featured" onSort={() => {}} />);

    expect(screen.getByText("Current value: featured")).toBeInTheDocument();
  })

  it("calls onSort when a new option is selected", () => {
    const mockOnSort = jest.fn()
    render(<SortDropdown sortOption="featured" onSort={mockOnSort} />);
    fireEvent.click(screen.getByTestId("select-root"));

    expect(mockOnSort).toHaveBeenCalledWith("price-asc");
  })
})

