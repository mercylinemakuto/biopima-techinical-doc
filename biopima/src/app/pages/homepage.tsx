"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navLabels = [
  "Home",
  "Features",
  "IOT-setup",
  "Frontend",
  "Backend",
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const smoothScrollTo = (element: HTMLElement, offset = 0) => {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 800;
    let startTime: number | null = null;

    const easeInOutCubic = (time: number, start: number, change: number, duration: number) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time * time + start;
      time -= 2;
      return (change / 2) * (time * time * time + 2) + start;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const getHref = (label: string) => {
    switch (label) {
      case "Home":
        return "#home";
      case "Features":
        return "#features";
      case "IOT-setup":
        return "#iot-setup"; 
      case "Frontend":
        return "#frontend";
      case "Backend":
        return "#backend";
      default:
        return "#home";
    }
  };

  const handleNavClick = (label: string) => {
    setActivePage(label);
    closeMenu();
    const href = getHref(label);

    if (href.startsWith("#")) {
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        smoothScrollTo(el, -80);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "features", "iot-setup", "frontend", "backend"]; 
      const scrollPosition = window.scrollY + 100;

      let currentSection = "Home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          switch (id) {
            case "home":
              currentSection = "Home";
              break;
            case "features":
              currentSection = "Features";
              break;
            case "iot-setup":
              currentSection = "IOT-setup";
              break;
            case "frontend":
              currentSection = "Frontend";
              break;
            case "backend":
              currentSection = "Backend";
              break;
          }
        }
      }
      setActivePage(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white w-full pt-[70px]">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white w-full">
        <div className="flex items-center space-x-2 md:w-[200px] xl:ml-[20px]">
          <Image
            width={160}
            height={47}
            src="/images/favicon.png"
            alt="Biopima IoT Device"
            className="w-[160px] h-[47px] md:w-[200px] md:h-[60px]"
          />
        </div>
        <nav className="hidden md:flex xl:space-x-16 font-semibold bg-white">
          {navLabels.map((label) => (
            <span
              key={label}
              onClick={() => handleNavClick(label)}
              className={`cursor-pointer text-[18px] xl:text-[22px] mr-5 transition-colors duration-200 font-medium ${
                activePage === label ? "text-[#9EAF1B]" : "text-black hover:text-[#9EAF1B]"
              }`}
            >
              {label}
            </span>
          ))}
        </nav>
        <div className="md:hidden relative z-50">
          <button
            aria-label="Toggle menu"
            className="flex flex-col w-8 h-8 justify-center items-center cursor-pointer text-[#9EAF1B]"
            onClick={toggleMenu}
          >
            <span className="block h-1 w-8 rounded-[4px] bg-current" />
            <span className="block h-1 w-8 rounded-[4px] bg-current my-[4px]" />
            <span className="block h-1 w-8 rounded-[4px] bg-current" />
          </button>
          <nav
            className={`fixed top-0 right-0 h-full w-[70vw] max-w-xs bg-white shadow-lg transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out flex flex-col px-8 py-20 space-y-8 z-40`}
          >
            <button
              aria-label="Close menu"
              className="absolute top-7 right-7.5 text-[#9EAF1B] text-3xl font-medium focus:outline-none"
              onClick={closeMenu}
              type="button"
            >
              &times;
            </button>
            {navLabels.map((label) => (
              <span
                key={label}
                onClick={() => handleNavClick(label)}
                className={`cursor-pointer text-[14px] font-medium hover:underline transition-colors duration-200 ${
                  activePage === label ? "text-[#9EAF1B]" : "text-black"
                }`}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main
        className="flex flex-col-reverse md:flex-row items-center px-6 md:px-10 lg:pr-0 xl:px-14 2xl:px-10 py-10 bg-white w-full xl:gap-2 overflow-hidden gap-10 pr-6 md:pr-0 xl:pr-0 2xl:pr-0"
        id="home"
      >
        <div className="md:w-2/3 space-y-3 max-w-3xl md:pr-10 lg:pr-12 xl:pr-0 2xl:pr-0  xl:w-[800px]">
          <h1 className="text-[25px] xl:text-[37px] 2xl:ml-10 lg:text-[26px] md:text-[30px] font-semibold text-black">
            Smart IoT Monitoring for <br />
            <span className="text-[#9EAF1B] md:text-[27px] xl:text-[45px]">Biogas Digesters</span>
          </h1>
          <p className="text-[14px] md:text-[20px] 2xl:ml-10 lg:text-[20px] text-black">
            Monitoring gas pressure, detect leaks, track usage patterns, and receive real-time alerts with BioPima’s advanced IoT technology.
          </p>
        </div>
        <div className="w-full md:w-[480px] md:h-90 lg:h-[400px] lg:w-[800px] lg:ml-[-80px] xl:h-[550px] xl:w-[950px] xl:ml-40 2xl:h-[700px] mt-[5px] md:mt-0">
          <Image
            src="/images/device.jpg"
            alt="Biopima IoT Device"
            width={400}
            height={300}
            className=" w-full h-full rounded-l-4xl rounded-tr-4xl rounded-br-4xl md:rounded-tr-none md:rounded-br-none object-cover "
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
