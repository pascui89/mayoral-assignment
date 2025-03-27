import { cn } from "@/lib/utils"

interface PriceDisplayProps {
  price: number
  discountPrice?: number
  className?: string
}

export default function PriceDisplay({ price, discountPrice, className }: PriceDisplayProps) {
  const hasDiscount = discountPrice !== undefined && discountPrice < price

  return (
    <div className={cn("flex flex-col", className)}>
      {hasDiscount ? (
        <>
          <span className="text-sm text-muted-foreground line-through text-center">
            {price.toFixed(2)} €
          </span>
          <span className="text-sm text-red-600 sm:min-h-[24px] text-center">
            {discountPrice.toFixed(2)} €
          </span>
        </>
      ) : (
        <span className="text-sm align-middle flex items-center justify-center sm:min-h-[48px]">{price.toFixed(2)} €</span>
      )}
    </div>
  )
}

