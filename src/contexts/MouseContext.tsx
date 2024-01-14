import React, { ReactNode, createContext, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

type Variant = "default" | "hover";

interface MouseState {
  position: Position;
  variant: Variant;
}

interface MouseContextProps {
  mouseState: MouseState;
  setCurrentVariant: (variant: Variant) => void;
}

interface ProviderProps {
  children?: ReactNode;
}

export const MouseContext = createContext<MouseContextProps | undefined>(
  undefined
);

export const MouseProvider: React.FC<ProviderProps> = ({ children }) => {
  const [mouseState, setMouseState] = useState<MouseState>({
    position: { x: 0, y: 0 },
    variant: "default",
  });

  const setCurrentVariant = (variant: Variant) => {
    setMouseState((prev) => ({ ...prev, variant }));
  };

  const handleMove = (e: MouseEvent) => {
    setMouseState((prev) => ({
      ...prev,
      position: { x: e.clientX, y: e.clientY },
    }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mouseState, setCurrentVariant }}>
      {children}
    </MouseContext.Provider>
  );
};
