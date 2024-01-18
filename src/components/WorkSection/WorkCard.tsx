import { IProject } from "../../constants/common";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

interface Props {
  project: IProject;
}

function WorkCard({ project }: Props) {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div
      className="relative w-4/6 border border-highlight rounded-xl"
      onMouseEnter={() => setCurrentVariant("hover")}
      onMouseLeave={() => setCurrentVariant("default")}
      onClick={() => window.open(project.link, "_blank")}
    >
      <img
        src={project.image}
        className="rounded-xl w-full h-full opacity-70 hover:opacity-100 transition duration-700"
      />
      <div className="absolute bottom-6 left-6">
        <h1 className="font-bold text-lg">{project.title}</h1>
        <p className="text-sm my-0 font-thin">{project.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
