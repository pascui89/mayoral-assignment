import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/product-card';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <div {...props} />;
  },
}));

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    image: '/test-image.jpg',
    createdAt: '2023-01-01T00:00:00Z',
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('99.99 €')).toBeInTheDocument();
    expect(screen.getByText('/test-image.jpg')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('renders discounted price when available', () => {
    const discountedProduct = {
      ...mockProduct,
      discountPrice: 79.99,
    };
    
    render(<ProductCard product={discountedProduct} />);
    
    expect(screen.getByText('99.99 €')).toBeInTheDocument();
    expect(screen.getByText('79.99 €')).toBeInTheDocument();
  });
});