import type { Variants } from "motion/react";

export const fadeIn = (
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 0.6
) => {
  let x = 0,
    y = 0;
  if (direction === "left") x = 100;
  if (direction === "right") x = -100;
  if (direction === "up") y = 40;
  if (direction === "down") y = -40;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeInOut",
        stiffness: 70,
        damping: 14,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren = 0.15,
  delayChildren = 0
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
