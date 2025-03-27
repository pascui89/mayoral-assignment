import { renderHook, act } from '@testing-library/react'
import { useSort } from '@/hooks/use-sort'

// Mock the sort utility
jest.mock('@/utils/sort', () => ({
  sortProducts: (products, sortOption) => {
    if (sortOption === 'price-asc') {
      return [...products].sort((a, b) => a.price - b.price)
    }
    if (sortOption === 'price-desc') {
      return [...products].sort((a, b) => b.price - a.price)
    }
    return products
  },
}))

describe('useSort', () => {
  const mockProducts = [
    { id: '1', name: 'Product B', price: 200, image: '', description: '', createdAt: '' },
    { id: '2', name: 'Product A', price: 100, image: '', description: '', createdAt: '' },
    { id: '3', name: 'Product C', price: 300, image: '', description: '', createdAt: '' },
  ]

  it('initializes with featured sort option', () => {
    const { result } = renderHook(() => useSort(mockProducts))
    
    expect(result.current.state.sortOption).toBe('featured')
    expect(result.current.state.sortedProducts).toEqual(mockProducts)
  })

  it('sorts products when sort option changes', () => {
    const { result } = renderHook(() => useSort(mockProducts))
    
    act(() => {
      result.current.actions.handleSort('price-asc')
    })
    
    expect(result.current.state.sortOption).toBe('price-asc')
    expect(result.current.state.sortedProducts[0].price).toBe(100)
    expect(result.current.state.sortedProducts[1].price).toBe(200)
    expect(result.current.state.sortedProducts[2].price).toBe(300)
    
    act(() => {
      result.current.actions.handleSort('price-desc')
    })
    
    expect(result.current.state.sortOption).toBe('price-desc')
    expect(result.current.state.sortedProducts[0].price).toBe(300)
    expect(result.current.state.sortedProducts[1].price).toBe(200)
    expect(result.current.state.sortedProducts[2].price).toBe(100)
  })

  it('updates sorted products when products change', () => {
    const { result, rerender } = renderHook(
      ({ products }) => useSort(products),
      { initialProps: { products: mockProducts } }
    )
    
    expect(result.current.state.sortedProducts).toHaveLength(3)
    
    const newProducts = [mockProducts[0], mockProducts[1]]
    rerender({ products: newProducts })
    
    expect(result.current.state.sortedProducts).toHaveLength(2)
  })
})
