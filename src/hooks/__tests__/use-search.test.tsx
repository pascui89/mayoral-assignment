import { renderHook, act } from '@testing-library/react'
import { useSearch } from '@/hooks/use-search'

// Mock the debounce utility
jest.mock('@/utils/debounce', () => ({
  debounce: (fn) => fn,
}))

describe('useSearch', () => {
  const mockProducts = [
    { id: '1', name: 'Headphones', description: 'Wireless', price: 100, image: '', createdAt: '' },
    { id: '2', name: 'Keyboard', description: 'Mechanical', price: 150, image: '', createdAt: '' },
    { id: '3', name: 'Mouse', description: 'Wireless', price: 50, image: '', createdAt: '' },
  ]

  it('initializes with empty search term and all products', () => {
    const { result } = renderHook(() => useSearch(mockProducts))
    
    expect(result.current.state.searchTerm).toBe('')
    expect(result.current.state.filteredProducts).toEqual(mockProducts)
  })

  it('filters products based on search term', () => {
    const { result } = renderHook(() => useSearch(mockProducts))
    
    act(() => {
      result.current.actions.handleSearch('head')
    })
    
    expect(result.current.state.searchTerm).toBe('head')
    expect(result.current.state.filteredProducts).toHaveLength(1)
    expect(result.current.state.filteredProducts[0].name).toBe('Headphones')
  })

  it('filters products based on description', () => {
    const { result } = renderHook(() => useSearch(mockProducts))
    
    act(() => {
      result.current.actions.handleSearch('wireless')
    })
    
    expect(result.current.state.filteredProducts).toHaveLength(2)
    expect(result.current.state.filteredProducts[0].name).toBe('Headphones')
    expect(result.current.state.filteredProducts[1].name).toBe('Mouse')
  })

  it('returns all products when search term is empty', () => {
    const { result } = renderHook(() => useSearch(mockProducts))
    
    act(() => {
      result.current.actions.handleSearch('head')
    })
    
    expect(result.current.state.filteredProducts).toHaveLength(1)
    
    act(() => {
      result.current.actions.handleSearch('')
    })
    
    expect(result.current.state.filteredProducts).toHaveLength(3)
  })

  it('updates filtered products when products change', () => {
    const { result, rerender } = renderHook(
      ({ products }) => useSearch(products),
      { initialProps: { products: mockProducts } }
    )
    
    expect(result.current.state.filteredProducts).toHaveLength(3)
    
    const newProducts = [mockProducts[0], mockProducts[1]]
    rerender({ products: newProducts })
    
    expect(result.current.state.filteredProducts).toHaveLength(2)
  })
})
