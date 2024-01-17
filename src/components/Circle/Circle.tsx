import { ReactNode } from "react";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

interface Props {
  children: ReactNode;
}

function Circle({ children }: Props) {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div
      onMouseEnter={() => setCurrentVariant("hover")}
      onMouseLeave={() => setCurrentVariant("default")}
      className="bg-gradient-to-r from-secondary rounded-full grid place-content-center w-20 h-20 flex-shrink-0 border border-transparent transition hover:border-secondary"
    >
      {children}
    </div>
  );
}

export default Circle;
