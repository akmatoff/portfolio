import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";

function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  const { setCurrentVariant } = useMouseAnimate();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    console.log(activeSection);

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, [activeSection]);

  return (
    <div className="flex fixed items-center justify-center w-screen h-20 p-8">
      <div className="flex bg-accent bg-opacity-20 bg-blur backdrop-blur p-1 rounded-full text-sm font-light">
        <a className="text-primary-text" href="#hero">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-4 transition-all duration-300",
              activeSection === "hero" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            HOME
          </div>
        </a>
        <a className="text-primary-text" href="#about">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-4 transition-all duration-300",
              activeSection === "about" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            ABOUT
          </div>
        </a>
        <a href="#work">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-4 transition-all duration-300",
              activeSection === "work" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            WORK
          </div>
        </a>
        <a href="#contact">
          <div
            className={cn(
              "py-2 px-6 rounded-full transition-all duration-300",
              activeSection === "contact" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            CONTACT
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
