import { render, screen } from '@testing-library/react';
import PriceDisplay from '@/components/product-price-display';

describe('PriceDisplay', () => {
  it('renders regular price when no discount is provided', () => {
    render(<PriceDisplay price={99.99} />);
    
    expect(screen.getByText('99.99 €')).toBeInTheDocument();
    expect(screen.queryByText(/line-through/)).not.toBeInTheDocument();
  })

  it('renders both original and discounted price when discount is provided', () => {
    render(<PriceDisplay price={99.99} discountPrice={79.99} />);
    
    const originalPrice = screen.getByText('99.99 €');
    const discountedPrice = screen.getByText('79.99 €');
    
    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice).toHaveClass('line-through');
    expect(discountedPrice).toBeInTheDocument();
    expect(discountedPrice).toHaveClass('text-red-600');
  })

  it('applies custom className when provided', () => {
    render(<PriceDisplay price={99.99} className="test-class" />);
    
    const container = screen.getByText('99.99 €').parentElement;
    expect(container).toHaveClass('test-class');
  })

  it('does not show discount when discountPrice is higher than regular price', () => {
    render(<PriceDisplay price={99.99} discountPrice={109.99} />);
    
    expect(screen.getByText('99.99 €')).toBeInTheDocument();
    expect(screen.queryByText('109.99 €')).not.toBeInTheDocument();
  })
})
