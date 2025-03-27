"use client"

import { Button } from "@/components/ui/button";
import { Grid3X3, Grid2X2 } from "lucide-react";

interface GridToggleProps {
  gridLayout: "grid-3" | "grid-4"
  onToggle: () => void
}

export default function GridToggle({ gridLayout, onToggle }: GridToggleProps) {
  return (
    <div className="flex items-center border border-border rounded-md">
      <Button
        variant={gridLayout === "grid-3" ? "default" : "ghost"}
        size="icon"
        onClick={onToggle}
        className={`h-9 w-9 rounded-none rounded-l-md ${gridLayout === "grid-3" ? "bg-primary text-primary-foreground" : ""}`}
        aria-label="3 items per row"
      >
        <Grid3X3 className="h-4 w-4" />
      </Button>
      <Button
        variant={gridLayout === "grid-4" ? "default" : "ghost"}
        size="icon"
        onClick={onToggle}
        className={`h-9 w-9 rounded-none rounded-r-md ${gridLayout === "grid-4" ? "bg-primary text-primary-foreground" : ""}`}
        aria-label="4 items per row"
      >
        <Grid2X2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

