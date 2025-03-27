"use client"

import { useState, useEffect, useCallback } from "react";
import type { Product } from "@/types/product";
import { debounce } from "@/utils/debounce";

export function useSearch(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (!term.trim()) {
        setFilteredProducts(products);
        return;
      }

      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredProducts(filtered);
    }, 300),
    [products],
  )

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])

  return { 
    state: {
      searchTerm, 
      filteredProducts
    },
    actions: {
      handleSearch 
    }
  }
}

