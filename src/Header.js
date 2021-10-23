import React, { useState } from "react";
import Particles from "react-particles-js";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="w-full h-80 bg-primary">
        <div className="px-4 py-2 text-white flex md:justify-center z-10">
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul className="uppercase text-xs md:space-x-9 pt-4">
            <li className="md:inline-block cursor-pointer hover:text-cyan py-2 px-3">
              Home
            </li>
            <li className="md:inline-block cursor-pointer hover:text-cyan pt-2 pb-1 px-3 bg-gray-700 bg-opacity-75 text-cyan">
              Sponsors
            </li>
            <li className="md:inline-block cursor-pointer hover:text-cyan py-2 px-3">
              Projects
            </li>
            <li className="md:inline-block cursor-pointer hover:text-cyan py-2 px-3">
              Team
            </li>
            <li className="md:inline-block cursor-pointer hover:text-cyan py-2 px-3">
              ContactUs
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span
              onClick={handleToggle}
              class="navicon bg-white-darkest flex items-center relative"
            ></span>
          </label>
        </div>
      </div>
        
      <Particles
        className="h-36 z-0"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3.1565905665290903,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      

      <div className="justify-center items-center text-white uppercase text-3xl md:text-4xl lg:text-5xl">
        <h1 className="justify-center items-center text-center">
          Our Sponsors
        </h1>
      </div>
    </div>
  );
}

export default Header;
