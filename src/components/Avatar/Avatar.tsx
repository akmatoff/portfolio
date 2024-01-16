import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function Avatar() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div className="flex-1">
      <a href="#hero">
        <div
          className="rounded-full bg-avatar w-14 h-14 bg-cover shadow-sm"
          style={{ backgroundPositionY: "20%" }}
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        ></div>
      </a>
    </div>
  );
}

export default Avatar;
