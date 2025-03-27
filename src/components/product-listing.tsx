"use client"

import ProductGrid from "@/components/product-grid";
import SearchBar from "@/components/search-bar";
import SortDropdown from "@/components/sort-dropdown";
import GridToggle from "@/components/grid-toggle";
import { useProductListing } from "@/components/hooks/use-product-listing";

export default function ProductListing() {
  const {
    state: { sortedProducts, gridLayout, isLoading, searchTerm, sortOption },
    actions: { handleSearch, handleSort, toggleGridLayout },
  } = useProductListing()

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <div className="flex items-center gap-4">
          <SortDropdown sortOption={sortOption} onSort={handleSort} />
          <GridToggle gridLayout={gridLayout} onToggle={toggleGridLayout} />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : sortedProducts.length > 0 ? (
        <ProductGrid
          products={sortedProducts}
          gridLayout={gridLayout} 
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  )
}

