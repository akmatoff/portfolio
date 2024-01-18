import { WORK_EXPERIENCE } from "../../constants/common";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";
import WorkExperience from "../WorkExperience/WorkExperience";

import { FaGuitar, FaWalking } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { PiGameControllerFill } from "react-icons/pi";

import Circle from "../Circle/Circle";
import Reveal from "../Reveal/Reveal";

function AboutSection() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <section
      id="about"
      className="flex flex-col justify-center w-screen p-10 lg:p-40"
    >
      <div className="flex flex-col w-full px-2 text-xl md:text-2xl lg:px-32">
        <Reveal>
          <h1
            className="font-bold mb-4 text-3xl md:text-6xl"
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            ABOUT
          </h1>

          <p>
            I'm a front-end developer who is passionate about bringing into life
            great projects which will make life easier and enjoyable.
          </p>
          <p>
            I believe communication and working together can lead to achieving
            great things.
          </p>
          <p>
            I'm looking for more challenges and opportunity to grow further. I'd
            love to hear from you what ideas we can bring into life together.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-10 mt-10">
            {WORK_EXPERIENCE.map((work, index) => (
              <WorkExperience key={index} work={work} />
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col mt-20">
          <Reveal>
            <h1 className="font-bold text-3xl">OTHER PASSIONS</h1>

            <div className="flex gap-6 items-center mt-10 w-full">
              <Circle>
                <FaGuitar className="text-4xl" />
              </Circle>

              <p>
                In spare time I love playing guitar - I've been playing since
                2017.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex gap-6 items-center mt-10 w-full">
              <Circle>
                <LuMusic4 />
              </Circle>
              <p>Also enjoy making electronic music.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex gap-6 items-center mt-10 w-full">
              <Circle>
                <FaWalking />
              </Circle>
              <p>Love walking.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex gap-6 items-center mt-10 w-full">
              <Circle>
                <PiGameControllerFill />
              </Circle>
              <p>And I like playing Mortal Kombat.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
