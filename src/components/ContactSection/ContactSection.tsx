import { MdMail } from "react-icons/md";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";
import { SOCIAL_LINKS } from "../../constants/common";
import Reveal from "../Reveal/Reveal";

function ContactSection() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-screen min-h-screen p-10 md:p-40"
    >
      <Reveal>
        <a href={SOCIAL_LINKS.email}>
          <div
            onMouseLeave={() => setCurrentVariant("default")}
            onMouseEnter={() => setCurrentVariant("hover")}
            className="flex items-center gap-6 px-6 md:px-16 py-6 rounded-3xl bg-gradient-to-r from-secondary border border-highlight"
          >
            <MdMail className="text-4xl flex-shrink-0" />
            <p className="font-light">azim.akmatov1@gmail.com</p>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

export default ContactSection;
