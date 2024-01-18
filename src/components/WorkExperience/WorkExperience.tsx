import { IWorkExperience } from "../../constants/common";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

interface Props {
  work: IWorkExperience;
}

function WorkExperience({ work }: Props) {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <div
      className="flex flex-col md:flex-row gap-4"
      onMouseEnter={() => setCurrentVariant("hover")}
      onMouseLeave={() => setCurrentVariant("default")}
    >
      <div className="text-sm font-thin mb-4 md:mb-0 flex-[1_1_0%] text-secondary-text">
        {work.period}
      </div>
      <div className="flex flex-[2_2_0%] flex-col p-6 w-full h-32 bg-gradient-to-r from-secondary rounded-2xl border border-highlight">
        <div className="font-bold">{work.title}</div>
        <a href={work.companyLink || ""} target="_blank">
          <div className="text-lg font-light">{work.company}</div>
        </a>
      </div>
    </div>
  );
}

export default WorkExperience;
