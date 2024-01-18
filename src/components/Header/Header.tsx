import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useMouseAnimate } from "../../hooks/useMouseAnimate";
import Avatar from "../Avatar/Avatar";
import MobileMenu from "../MobileMenu/MobileMenu";

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
      { threshold: 0.5 }
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
    <div className="flex fixed z-30 items-center w-screen h-24 p-4 md:p-10">
      <Avatar
        className={activeSection !== "hero" ? "opacity-100" : "opacity-0"}
      />

      <div className="hidden md:flex bg-secondary bg-opacity-50 bg-blur backdrop-blur p-1 rounded-full text-sm font-light">
        <a className="text-primary-text" href="#hero">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary",
              activeSection === "hero" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            HOME
          </div>
        </a>

        <a href="#work">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary",
              activeSection === "work" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            WORK
          </div>
        </a>
        <a className="text-primary-text" href="#about">
          <div
            className={cn(
              "py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary",
              activeSection === "about" ? "bg-accent text-primary" : ""
            )}
            onMouseEnter={() => setCurrentVariant("hover")}
            onMouseLeave={() => setCurrentVariant("default")}
          >
            ABOUT
          </div>
        </a>
      </div>

      <MobileMenu />

      <div className="hidden md:block flex-1"></div>
    </div>
  );
}

export default Header;
