import { motion } from "framer-motion";

const techStacks = [
  {
    name: "Directus",
    image: "/directus.png",
  },
  {
    name: "Astro",
    image: "/astro.png",
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
  },
  {
    name: "React",
    image: "/React.png",
  },
  {
    name: "Node.js",
    image: "/node.png",
  },
  {
    name: "Java",
    image: "/java.png",
  },
  {
    name: "Docker",
    image: "/docker.png",
  },
  {
    name: "Python",
    image: "/Python.png",
  },
  {
    name: "Tailwind",
    image: "/tailwind.png",
  },
  {
    name: "CSS",
    image: "/css.png",
  },
  {
    name: "HTML",
    image: "/html.png",
  },
  {
    name: "Vite",
    image: "/vite.png",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="
      min-h-screen
      px-6
      py-32
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
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
            Tech Stack
          </h2>

        </motion.div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
          "
        >

          {techStacks.map((tech, index) => (

            <motion.div
              key={tech}
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{
                once: false,
              }}
              className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              group
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-blue-500/10
                to-purple-500/10
                blur-2xl
                "
              />

              <div
  className="
  relative
  z-10
  flex
  flex-col
  items-center
  justify-center
  gap-5
  "
>

  <img
    src={tech.image}
    alt={tech.name}
    className="
    w-16
    h-16
    object-contain
    "
  />

  <h3
    className="
    text-lg
    font-semibold
    "
  >
    {tech.name}
  </h3>

</div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}