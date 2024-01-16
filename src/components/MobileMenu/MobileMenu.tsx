import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="flex flex-col p-10 fixed z-10 top-0 left-0 right-0 bottom-0 bg-accent bg-opacity-40 backdrop-blur-sm">
          <div className="flex justify-end w-full h-60">
            <MdClose className="text-3xl" onClick={() => setIsOpen(false)} />
          </div>

          <div
            className="flex flex-col px-20 text-3xl "
            onClick={() => setIsOpen(false)}
          >
            <a className="text-primary-text" href="#hero">
              <div className="py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary">
                HOME
              </div>
            </a>
            <a className="text-primary-text" href="#about">
              <div className="py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary">
                ABOUT
              </div>
            </a>
            <a href="#work">
              <div className="py-2 px-6 rounded-full mr-3 transition-all duration-300 hover:bg-secondary">
                WORK
              </div>
            </a>
            <a href="#contact">
              <div className="py-2 px-6 rounded-full transition-all duration-300 hover:bg-secondary">
                CONTACT
              </div>
            </a>
          </div>
        </div>
      )}

      <div
        className="block md:hidden bg-accent bg-opacity-20 bg-blur backdrop-blur p-3 rounded-full text-sm font-light"
        onClick={() => setIsOpen(true)}
      >
        <MdOutlineMenu className="text-4xl" />
      </div>
    </>
  );
}

export default MobileMenu;
