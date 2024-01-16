import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function AboutSection() {
  const { setCurrentVariant } = useMouseAnimate();

  return (
    <section
      id="about"
      className="flex flex-col justify-center w-screen min-h-screen p-10 md:p-40"
    >
      <div className="flex flex-col w-full px-2 text-xl md:text-2xl md:px-48">
        <div
          className="font-bold mb-4 text-3xl md:text-6xl"
          onMouseEnter={() => setCurrentVariant("hover")}
          onMouseLeave={() => setCurrentVariant("default")}
        >
          ABOUT
        </div>

        <p>
          I'm a front-end developer who is passionate about bringing into life
          the greatest projects which will make life easier and enjoyable.
        </p>
        <p>
          I believe communication and working together can lead to achieving
          great things.
        </p>
        <p>
          I'm looking for more challenges and opportunity to grow further. I'd
          love to hear from you what ideas we can bring into life together.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
