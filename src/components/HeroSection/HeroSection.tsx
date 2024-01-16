import { SOCIAL_LINKS } from "../../constants/common";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function HeroSection() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <section
      id="hero"
      className="flex flex-col justify-center w-screen min-h-screen p-10 md:p-40"
    >
      <div className="flex w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
