import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function Header() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div className="flex fixed items-center justify-center w-screen h-20 p-8">
      <div className="flex bg-accent bg-opacity-20 bg-blur backdrop-blur p-1 rounded-full text-sm font-light">
        <div
          className="py-2 px-6 bg-accent rounded-full mr-4"
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        >
          <a className="text-primary">ABOUT</a>
        </div>
        <div
          className="py-2 px-6 mr-4"
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        >
          <a>WORK</a>
        </div>
        <div
          className="py-2 px-6"
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        >
          <a>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
