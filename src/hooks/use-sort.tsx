"use client"

import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { sortProducts } from "@/utils/sort";

export function useSort(products: Product[]) {
  const [sortOption, setSortOption] = useState("featured");
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  useEffect(() => {
    setSortedProducts(sortProducts(products, sortOption));
  }, [products, sortOption])

  const handleSort = (value: string) => {
    setSortOption(value)
  }

  return { 
    state: { 
      sortOption,
      sortedProducts
    },
    actions: { 
      handleSort 
    }
  }
}

