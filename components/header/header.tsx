import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Hamburger from "hamburger-react";

export default function Header(): JSX.Element {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header
      className={`flex z-20 h-20 items-center justify-between border-b border-gray-300 p-4 sm:px-8 md:px-10 lg:px-16
          
            `}
    >
      <div
        className="flex items-center
            gap-2"
      >
        <Image src="/logo.svg" alt="TubeSnag" width={30} height={30} />
        <h2 className="text-2xl font-bold">tubesnag.</h2>
      </div>
      <nav
        className={`
                fixed
                top-0
                bg-[#ffffff]
               
                ${navIsOpen ? "right-0" : "-right-full"}
                h-full
                w-full
                transition-all
                duration-500
                ease-in-out
                md:relative
                md:right-0
                md:flex
                md:h-auto
                md:w-auto
                md:items-center
                md:justify-between
                md:bg-transparent
                
                `}
      >
        <ul
          className={`mt-28 flex  flex-col items-center gap-10 transition-all duration-100 ease-in-out md:mt-0 md:flex-row md:gap-8`}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} name={link.name} />
          ))}

          <li>
            <button
              className="flex items-center gap-3 rounded-md border
                        border-gray-300
                        px-4
                        py-2
                        transition-all
                        duration-300
                        ease-in-out
                        hover:border-gray-400
                        

                        "
            >
              <Image src="/heart.svg" alt="heart" width={20} height={20} />
              Sponsor Project
            </button>
          </li>
        </ul>
      </nav>
      <div
        className="z-10
                md:hidden
                
                "
      >
        <Hamburger toggled={navIsOpen} toggle={setNavIsOpen} duration={0.5} />
      </div>
    </header>
  );
}

const navLinks = [
  {
    name: "What's new",
    href: "#",
  },
  {
    name: "Join Us",
    href: "#",
  },
  {
    name: "Tools",
    href: "#",
  },
];

type LinkProps = {
  href: string;
  name: string;
};
const Link = ({ href, name }: LinkProps): JSX.Element => (
  <li className="text-lg">
    <a href={href} className="hover:text-gray-600">
      {name}
    </a>
  </li>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
