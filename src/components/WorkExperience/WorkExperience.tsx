import { IWorkExperience } from "../../constants/common";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

interface Props {
  work: IWorkExperience;
}

function WorkExperience({ work }: Props) {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div
      className="flex flex-col md:flex-row"
      onMouseEnter={() => setCurrentVariant("hover")}
      onMouseLeave={() => setCurrentVariant("default")}
    >
      <div className="flex-1 font-thin mb-6 md:mb-0">{work.period}</div>
      <div className="flex flex-col flex-1 p-6 w-full h-32 bg-gradient-to-r from-secondary rounded-2xl">
        <div className="font-bold">{work.title}</div>
        <a href={work.companyLink || ""} target="_blank">
          <div className="text-lg font-light">{work.company}</div>
        </a>
      </div>
    </div>
  );
}

export default WorkExperience;
