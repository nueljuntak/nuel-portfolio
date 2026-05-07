import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

import Typewriter from "../ui/Typewriter";
import AnimatedBackground from "../layout/AnimatedBackground";
import IconGlow from "../ui/IconGlow";

export default function Opening({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      setTimeout(() => {
        onFinish?.();
      }, 1000);

    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // CONTAINER STAGGER
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // ICON ANIMATION
  const iconVariant = {
    initial: {
      y: -80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  // TEXT FROM LEFT
  const textLeft = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // TEXT FROM BOTTOM
  const textBottom = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(15px)",
            transition: {
              duration: 1,
            },
          }}
        >
          <AnimatedBackground />

          <div className="relative z-10 text-center">

            {/* ICONS */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex justify-center gap-6 mb-10"
            >

              <motion.div variants={iconVariant}>
                <IconGlow>
                  <Code2 size={30} />
                </IconGlow>
              </motion.div>

              <motion.div variants={iconVariant}>
                <IconGlow>
                  <User size={30} />
                </IconGlow>
              </motion.div>

            </motion.div>

            {/* TOP TEXT */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex justify-center gap-4 flex-wrap text-4xl md:text-6xl font-bold"
            >

              {["Hi,", "Welcome", "To"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={textLeft}
                  className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}

            </motion.div>

            {/* BOTTOM TEXT */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex justify-center gap-4 flex-wrap text-5xl md:text-7xl font-bold mt-4"
            >

              {["Nuel","Portfolio", "Website"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={textBottom}
                  className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                >
                  {word}
                </motion.span>
              ))}

            </motion.div>

            {/* DOMAIN */}
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="mt-10 flex justify-center"
            >
              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">

                <Globe className="text-blue-300" size={20} />

                <span className="text-blue-200 text-lg">
                  <Typewriter text="Nuel's Portfolio" speed={120} />
                </span>

              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}