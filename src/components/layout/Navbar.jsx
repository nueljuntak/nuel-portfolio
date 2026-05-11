import { useEffect, useState } from "react";

const navItems = [
  "home",
  "about",
  "tech",
  "project",
  "contact",
];

export default function Navbar() {
  const [active, setActive] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

      const sections = navItems.map(
        (item) =>
          document.getElementById(item)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 120 &&
          rect.bottom >= 120
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500

      ${
        scrolled
          ? `
            bg-[#070b1a]/40
            backdrop-blur-xl
            border-b
            border-white/10
          `
          : `
            bg-transparent
          `
      }
      `}
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        items-center
        justify-between
        "
      >

        {/* LOGO */}
        <a
          href="#home"
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-blue-400
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Nuel
        </a>

        {/* MENU */}
        <nav className="flex gap-10">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="
              relative
              text-white/70
              hover:text-white
              transition
              duration-300
              capitalize
              "
            >

              {item}

              {/* ACTIVE LINE */}
              <span
                className={`
                absolute
                left-0
                -bottom-2
                h-[2px]
                bg-gradient-to-r
                from-blue-400
                to-purple-500
                transition-all
                duration-300

                ${
                  active === item
                    ? "w-full"
                    : "w-0"
                }
                `}
              />

            </a>
          ))}

        </nav>
      </div>
    </header>
  );
}