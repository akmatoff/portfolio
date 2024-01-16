import { SOCIAL_LINKS } from "../../constants/common";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";
import Avatar from "../Avatar/Avatar";

function HeroSection() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <section
      id="hero"
      className="flex flex-col justify-center w-screen min-h-screen p-10 md:p-40"
    >
      <div className="flex flex-col w-full md:flex-row">
        <Avatar
          className="w-24 h-24 md:w-40 md:h-40 mr-10 mb-10 md:mb-0"
          noSpacing
        />

        <div>
          <div
            className="text-4xl md:text-6xl lg:text-8xl font-bold"
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            AZIM AKMATOV
          </div>
          <div
            className="font-light text-md md:text-lg"
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            FRONT-END DEVELOPER BASED IN KYRGYZSTAN
          </div>
          <div
            className="flex mt-4 text-3xl"
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            <a
              className="hover:text-accent transition-colors mr-4"
              href={SOCIAL_LINKS.github}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-accent transition-colors mr-4"
              href={SOCIAL_LINKS.likedin}
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-accent transition-colors mr-4"
              href={SOCIAL_LINKS.telegram}
              target="_blank"
            >
              <FaTelegram />
            </a>
            <a
              className="hover:text-accent transition-colors mr-4"
              href={SOCIAL_LINKS.email}
              target="_blank"
            >
              <MdMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
