import { useMouseAnimate } from "../../hooks/useMouseAnimate";
import cn from "classnames";
interface Props {
  className?: string;
  noSpacing?: boolean;
}

function Avatar({ className, noSpacing = false }: Props) {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div className={noSpacing ? "" : "flex-1"}>
      <a href="#hero">
        <div
          className={cn(
            "rounded-full bg-avatar w-14 h-14 bg-cover shadow-sm transition-opacity duration-400",
            className && className
          )}
          style={{ backgroundPositionY: "20%" }}
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        ></div>
      </a>
    </div>
  );
}

export default Avatar;
