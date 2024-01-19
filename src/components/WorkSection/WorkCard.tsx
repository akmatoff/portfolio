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
      <div className="flex w-full justify-between absolute bottom-6 px-6">
        <div>
          <h1 className="font-bold text-lg drop-shadow-md">{project.title}</h1>
          <p className="text-sm my-0 font-thin drop-shadow-md">
            {project.description}
          </p>
        </div>

        {project.isFeatured && (
          <div className="border-2 border-primary-text px-4 py-3 rounded-full text-sm font-bold drop-shadow-lg">
            FEATURED
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkCard;
