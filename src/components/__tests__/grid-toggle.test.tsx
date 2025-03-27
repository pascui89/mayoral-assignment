import { render, screen, fireEvent } from '@testing-library/react'
import GridToggle from '@/components/grid-toggle'

describe('GridToggle', () => {
  it('renders both grid options', () => {
    render(<GridToggle gridLayout="grid-4" onToggle={() => {}} />);
    
    expect(screen.getByLabelText('3 items per row')).toBeInTheDocument();
    expect(screen.getByLabelText('4 items per row')).toBeInTheDocument();
  })

  it('highlights the active grid layout option', () => {
    render(<GridToggle gridLayout="grid-4" onToggle={() => {}} />);
    
    const grid4Button = screen.getByLabelText('4 items per row');
    expect(grid4Button).toHaveClass('bg-primary');
    
    const grid3Button = screen.getByLabelText('3 items per row');
    expect(grid3Button).not.toHaveClass('bg-primary');
  })

  it('calls onToggle when a grid option is clicked', () => {
    const mockOnToggle = jest.fn();
    render(<GridToggle gridLayout="grid-4" onToggle={mockOnToggle} />);
    
    fireEvent.click(screen.getByLabelText('3 items per row'));
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  })
})
