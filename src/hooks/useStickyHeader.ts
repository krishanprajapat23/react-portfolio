import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react"

export function useStickyHeader(offset = 100) {
  const { scrollY } = useScroll()
  const [isSticky, setIsSticky] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsSticky(current >= offset)
  })

  return isSticky
}