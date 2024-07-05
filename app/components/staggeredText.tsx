"use client"

import { motion } from "framer-motion"

type StaggeredTextProps = {
  text: string
}

export const StaggeredText = ({ text }: StaggeredTextProps) => {
  const duration = 0.25
  const stagger = 0.025

  return (
    <motion.div
      className="relative block overflow-hidden whitespace-nowrap text-4xl text-black uppercase sm:text-6xl md:text-7xl lg:text-8xl"
      initial="initial"
      whileHover="hovered"
      style={{ lineHeight: 0.75 }}
    >
      <motion.p>
        {text.split("").map((char, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i
            }}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p className="absolute inset-0">
        {text.split("").map((char: string, i: number) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 }
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i
            }}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  )
}
