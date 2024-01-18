import { PROJECTS } from "../../constants/common";
import Reveal from "../Reveal/Reveal";
import WorkCard from "./WorkCard";

function WorkSection() {
  return (
    <section
      id="work"
      className="flex flex-col justify-center w-screen min-h-screen p-10 md:p-0"
    >
      <Reveal>
        <div className="flex w-full items-center justify-center">
          {PROJECTS.map((project, index) => (
            <WorkCard key={index} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default WorkSection;
