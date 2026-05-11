import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      px-6
      py-32
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        "
      >

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: false,
          }}
          className="text-center mb-24"
        >

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
            inline-block
            "
          >
            About Me
          </h2>

        </motion.div>

        {/* CONTENT */}
        <div
          className="
          grid
          md:grid-cols-2
          gap-16
          lg:gap-24
          items-center
          px-4
          md:px-10
          "
        >

          {/* LEFT TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
          >

            {/* NAME */}
            <h3
              className="
              text-4xl
              md:text-[46px]
              font-bold
              leading-[1.1]
              max-w-[900px]
              whitespace-nowrap
              "
            >
              Immanuel Ranto
              <br />
              Hasurungan Simanjuntak
            </h3>

            {/* DESC */}
            <p
              className="
              mt-8
              text-white/70
              leading-relaxed
              text-base
              md:text-lg
              max-w-lg
              "
            >
              Informatics graduate focused
              on Fullstack Software
              Engineering and AI
              Engineering, passionate about
              building modern, scalable,
              and interactive digital
              experiences.
            </p>

            {/* BUTTON */}
            <div className="mt-10">

              <a
                href="#"
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
                text-sm
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
                  Download Resume
                </span>

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
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
            }}
          >

            <div
              className="
              relative
              w-[260px]
              h-[260px]
              rounded-full
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_0_80px_rgba(59,130,246,0.35)]
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/20
                to-purple-500/20
                blur-2xl
                "
              />

              <img
                src="/photo2.png"
                alt="Immanuel"
                className="
                relative
                z-10
                w-full
                h-full
                object-cover
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}