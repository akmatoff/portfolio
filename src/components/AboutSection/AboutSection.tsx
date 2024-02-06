import { SOCIAL_LINKS, WORK_EXPERIENCE } from "../../constants/common";
import WorkExperience from "../WorkExperience/WorkExperience";

import { FaGuitar, FaWalking } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { PiGameControllerFill } from "react-icons/pi";
import { MdMail, MdOutlineFileDownload } from "react-icons/md";

import Circle from "../Circle/Circle";
import Reveal from "../Reveal/Reveal";
import Stack from "../Stack/Stack";

function AboutSection() {
  return (
    <section id="about" className="flex flex-col justify-center w-screen p-10">
      <div className="flex flex-col w-full px-2 text-lg">
        <Reveal>
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            <div className="flex-[2_2_0%] flex flex-col gap-6">
              <div className="p-6 bg-gradient-to-tr from-secondary rounded-2xl border border-highlight">
                <p className="mt-0">
                  I'm a front-end developer who is passionate about bringing
                  into life great projects which will make life easier and
                  enjoyable.
                </p>
                <p>
                  I believe communication and working together can lead to
                  achieving great things.
                </p>
                <p className="mb-0"></p>
              </div>
              <div className="p-6 bg-gradient-to-tr from-secondary rounded-2xl border border-highlight ">
                <h1 className="font-thin uppercase">My background</h1>
                <p>
                  I was born in Aktobe, Kazakhstan but have spent my life mostly
                  in Kyrgyzstan.
                </p>
                <p>
                  I got interested in making web pages with HTML and CSS at
                  school when I was around 8th grade. But got into seriously
                  studying programming at college in 2018.
                </p>
                <p className="mb-0">
                  I studied informatics at IUCA college in Tokmok - the city
                  where I'd grown
                </p>
                <p>
                  My first and currently last company is Appboxo. I can say it
                  is the place where I stepped into adult life. It helped me to
                  grow and learn a lot of things.
                </p>
              </div>
            </div>

            <div className="flex flex-col flex-[1_1_10%] gap-6">
              <Reveal>
                <Stack />
              </Reveal>

              <Reveal>
                <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-secondary rounded-2xl border border-highlight font-light">
                  <div>
                    I'm looking for more challenges and opportunity to grow
                    further. I'd love to hear from you what ideas we can bring
                    into life together.
                  </div>
                  <div className="flex justify-between">
                    <a href={SOCIAL_LINKS.email}>
                      <div className="bg-highlight rounded-full p-2 hover:bg-secondary transition duration-700">
                        <MdMail />
                      </div>
                    </a>
                    <a href="akmatoff-resume.pdf" download>
                      <div className="h-9 w-36 flex justify-center items-center gap-2 bg-highlight rounded-full text-sm hover:bg-secondary transition duration-700">
                        Resume
                        <MdOutlineFileDownload className="text-xl" />
                      </div>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="p-6 bg-gradient-to-br from-secondary rounded-2xl border border-highlight">
                  <h1 className="font-thin uppercase">EDUCATION</h1>
                  <div className="flex mt-4">
                    <div className="text-sm flex-1 font-thin text-secondary-text">
                      2018 - 2021
                    </div>
                    <div className="flex-[1_1_40%]">
                      <div className="text-sm">
                        Computer Science Associate's Degree
                      </div>
                      <div className="mt-1 text-sm text-secondary-text font-light">
                        HTC IUCA
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-10 mt-10 md:mt-0 flex-[2_2_0%]">
              {WORK_EXPERIENCE.map((work, index) => (
                <WorkExperience key={index} work={work} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col mt-10">
          <Reveal>
            {/* <h1 className="font-bold text-3xl">OTHER PASSIONS</h1> */}

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
