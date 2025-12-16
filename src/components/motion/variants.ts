import type { Variants } from "motion";

// Slide up entrance for title or section heading
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut"  } 
  }
};

// Fade up entrance for all sections
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// fade in effect
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

export const zoomOutUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,      // start slightly lower
    scale: 1.2, // slightly zoomed in
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stagger children if needed
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 200ms between children
    },
  },
};