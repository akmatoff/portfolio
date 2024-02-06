import { PROJECTS } from "../../constants/common";
import Reveal from "../Reveal/Reveal";
import WorkCard from "./WorkCard";

function WorkSection() {
  return (
    <section id="work" className="flex flex-col justify w-screen p-10">
      <Reveal>
        <div className="flex flex-col md:flex-row w-full gap-8">
          {PROJECTS.map((project, index) => (
            <WorkCard key={index} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default WorkSection;
