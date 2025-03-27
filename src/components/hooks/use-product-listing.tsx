import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { useSearch } from "@/hooks/use-search";
import { useSort } from "@/hooks/use-sort";
import { useGridLayout } from "@/hooks/use-grid-layout";

export function useProductListing() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { 
        state: { searchTerm, filteredProducts }, 
        actions: { handleSearch } 
    } = useSearch(products);
    const { 
        state: { sortOption, sortedProducts }, 
        actions: { handleSort }
    } = useSort(filteredProducts);
    const { 
        state: { gridLayout }, 
        actions: { toggleGridLayout }
    } = useGridLayout();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
            // In a real app, this would be an API call
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
            } catch (error) {
            console.error("Error fetching products:", error);
            } finally {
            setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return {
        state: {
            sortedProducts, gridLayout, isLoading, searchTerm, sortOption
        },
        actions: {
            handleSearch, handleSort, toggleGridLayout
        },
    }
}