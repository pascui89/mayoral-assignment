import type { Product } from "@/types/product";

export function sortProducts(products: Product[], sortOption: string): Product[] {
  const productsCopy = [...products]

  switch (sortOption) {
    case "price-asc":
      return productsCopy.sort((a, b) => a.price - b.price)
    case "price-desc":
      return productsCopy.sort((a, b) => b.price - a.price)
    case "newest":
      return productsCopy.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    case "featured":
    default:
      return productsCopy.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

