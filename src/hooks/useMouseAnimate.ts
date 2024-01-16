import { useContext } from "react";
import { MouseContext } from "../contexts/MouseContext";
import { Variants } from "framer-motion";

export const useMouseAnimate = () => {
  const context = useContext(MouseContext);

  if (!context) {
    throw new Error("useMouseAnimate must be used within a MouseProvider");
  }

  const variants: Variants = {
    default: {
      x: context.mouseState.position.x - 12,
      y: context.mouseState.position.y - 12,
    },
    hover: {
      x: context.mouseState.position.x - 32,
      y: context.mouseState.position.y - 32,
      width: 72,
      height: 72,
      backgroundColor: "var(--secondary-color)",
      mixBlendMode: "difference",
    },
  };

  return { ...context, variants };
};
