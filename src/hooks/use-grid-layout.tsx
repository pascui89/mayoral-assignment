"use client"

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function useGridLayout() {
  const [gridLayout, setGridLayout] = useState<"grid-3" | "grid-5">("grid-5");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) {
      setGridLayout("grid-3");
    } else {
      setGridLayout("grid-5");
    }
  }, [isMobile]);

  const toggleGridLayout = () => {
    setGridLayout(gridLayout === "grid-5" ? "grid-3" : "grid-5");
  }

  return { 
    state: {
      gridLayout
    },
    actions: {
      toggleGridLayout
    }
  }
}

