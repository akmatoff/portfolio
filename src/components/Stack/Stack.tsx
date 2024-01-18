import { FaReact, FaAngular } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

function Stack() {
  return (
    <div className="p-6 bg-gradient-to-tr from-secondary rounded-2xl border border-highlight">
      {/* <h1 className="font-light">Stack</h1> */}
      <div className="flex w-full justify-between text-3xl">
        <div className="p-3 bg-gradient-to-br from-secondary border border-highlight rounded-full hover:bg-primary transition">
          <FaReact />
        </div>
        <div className="p-3 bg-gradient-to-br from-secondary border border-highlight rounded-full hover:bg-primary transition">
          <SiTypescript />
        </div>
        <div className="p-3 bg-gradient-to-br from-secondary border border-highlight rounded-full hover:bg-primary transition">
          <SiNextdotjs />
        </div>
        <div className="p-3 bg-gradient-to-br from-secondary border border-highlight rounded-full hover:bg-primary transition">
          <FaAngular />
        </div>
      </div>
    </div>
  );
}

export default Stack;
