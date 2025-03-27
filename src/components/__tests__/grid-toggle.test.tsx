import { render, screen, fireEvent } from '@testing-library/react';
import GridToggle from '@/components/grid-toggle';

describe('GridToggle', () => {
  it('renders both grid options', () => {
    render(<GridToggle gridLayout="grid-5" onToggle={jest.fn()} />); // Usar jest.fn() en lugar de una función vacía
    
    expect(screen.getByLabelText('3 items per row')).toBeInTheDocument();
    expect(screen.getByLabelText('5 items per row')).toBeInTheDocument();
  });

  it('highlights the active grid layout option', () => {
    render(<GridToggle gridLayout="grid-5" onToggle={jest.fn()} />); // Usar jest.fn() en lugar de una función vacía
    
    const grid5Button = screen.getByLabelText('5 items per row');
    expect(grid5Button).toHaveClass('bg-primary');
    
    const grid3Button = screen.getByLabelText('3 items per row');
    expect(grid3Button).not.toHaveClass('bg-primary');
  });

  it('calls onToggle when a grid option is clicked', () => {
    const mockOnToggle = jest.fn();
    render(<GridToggle gridLayout="grid-5" onToggle={mockOnToggle} />);
    
    fireEvent.click(screen.getByLabelText('3 items per row'));
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});