import { PROJECTS } from "../../constants/common";
import WorkCard from "./WorkCard";

function WorkSection() {
  return (
    <section
      id="work"
      className="flex flex-col justify-center w-screen min-h-screen p-10 md:p-40"
    >
      <div className="flex w-full items-center justify-center">
        {PROJECTS.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
