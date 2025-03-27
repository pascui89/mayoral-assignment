import { render, screen } from '@testing-library/react';
import ProductGrid from '@/components/product-grid';

// Mock the ProductCard component
jest.mock('@/components/product-card', () => {
  return {
    __esModule: true,
    default: ({ product }) => <div data-testid={`product-card-${product.id}`}>{product.name}</div>,
  };
});

describe('ProductGrid', () => {
  const mockProducts = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 10, image: '', createdAt: '' },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 20, image: '', createdAt: '' },
    { id: '3', name: 'Product 3', description: 'Description 3', price: 30, image: '', createdAt: '' },
  ];

  it('renders the correct number of product cards', () => {
    render(<ProductGrid products={mockProducts} gridLayout="grid-5" />);

    expect(screen.getByTestId('product-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-2')).toBeInTheDocument();
    expect(screen.getByTestId('product-card-3')).toBeInTheDocument();
    expect(screen.getAllByTestId(/product-card-/)).toHaveLength(3);
  });

  it('renders empty grid when no products are provided', () => {
    render(<ProductGrid products={[]} gridLayout="grid-5" />);

    expect(screen.queryByTestId(/product-card-/)).not.toBeInTheDocument();
  });
});