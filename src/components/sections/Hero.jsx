import {
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-6
      pt-32
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-28
        items-center
        px-4
        md:px-10
        "
      >

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "
          >

            <span>
              Fullstack
            </span>

            <br />

            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Engineer
            </span>

          </h1>

          <p
            className="
            mt-8
            text-lg
            text-white/70
            leading-relaxed
            max-w-lg
            "
          >
            I build modern scalable and
            interactive digital experiences
            with clean design and smooth
            user interaction.
          </p>

          {/* BUTTON */}
          <div className="mt-10">

            <a
              href="#about"
              className="
              relative
              overflow-hidden
              px-6
              py-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              inline-flex
              items-center
              justify-center
              group
              "
            >

              {/* HOVER */}
              <span
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                translate-y-full
                group-hover:translate-y-0
                transition-transform
                duration-500
                "
              />

              <span className="relative z-10">
                About Me
              </span>

            </a>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-12">

            <a
              href="https://www.instagram.com/immanuel_ranto"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-14
              h-14
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition
              duration-300
              "
            >
              <Instagram />
            </a>

            <a
              href="https://www.linkedin.com/in/immanuel-ranto-hasurungan-simanjuntak-ab0119274"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-14
              h-14
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition
              duration-300
              "
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/nueljuntak"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-14
              h-14
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition
              duration-300
              "
            >
              <Github />
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="
          flex
          justify-center
          md:justify-end
          "
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >

          <img
            src="/photo1.png"
            alt="Nuel"
            className="
            w-[380px]
            md:w-[450px]
            object-contain
            drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]
            "
          />

        </motion.div>

      </div>

    </section>
  );
}