import Image from "next/image"
import type { Product } from "@/types/product";
import PriceDisplay from "@/components/product-price-display";

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group border border-border rounded-lg overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted m-5">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          layout="fill"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4 m-2">
        <h3 className="font-medium text-sm line-clamp-1 text-center mb-4">
          {product.name}
        </h3>
        <div className="flex flex-col items-center gap-2">
          <PriceDisplay 
            price={product.price} 
            discountPrice={product.discountPrice} 
            className="m-1" 
          />
          <p className="text-muted-foreground text-sm text-center min-h-[32px] sm:min-h-[24px] line-clamp-1">
            {product.description}
          </p>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

