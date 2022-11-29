import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link as LinkS } from "react-scroll";
import Image from "next/image";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isActive, setIsActive] = useState(false);
  const handleBgClick = () => {
    setIsActive((current) => !current);
  };

  const menuItems = [
    {
      id: 1,
      item: "GUIDES",
      link: "section-guides",
    },
    {
      id: 2,
      item: "COURSES",
      link: "section-courses",
    },
    {
      id: 3,
      item: "PROJECTS",
      link: "section-projects",
    },
  ];

  return (
    <>
      <div className="absolute top-0 flex text-white z-[99999]">
        <div className="w-screen max-w-6xl py-5 flex flex-row justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/icons/LEARNAURORA.svg"
              alt=""
              height={100}
              width={100}
              className="pointer-events-none"
            />
          </div>
          <div className="flex items-center gap-x-10">
            {menuItems.map(({ item, link }) => {
              return (
                <>
                  <LinkS
                    to={link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={0}
                    onClick={handleBgClick}
                  >
                    <button
                      className="font-[montserrat] font-semibold text-2xl cursor-pointer"
                      id="onClick"
                    >
                      {item}
                    </button>
                  </LinkS>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
