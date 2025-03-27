import ProductCard from "@/components/product-card";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[]
  gridLayout: "grid-3" | "grid-4"
}

export default function ProductGrid({ products, gridLayout }: ProductGridProps) {
  const gridClass =
    gridLayout === "grid-4"
      ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

