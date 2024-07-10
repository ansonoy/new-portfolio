"use client"

import { useEffect } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate
} from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MagneticEffect } from "./magneticEffect"

export const IntroReveal = () => {
  const colorArray = ["#13FFAA", "#1367C6", "#CE84CF", "#DD335C"]
  const color = useMotionValue(colorArray[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 55%, ${color})`

  useEffect(() => {
    animate(color, colorArray, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [])

  return (
    <motion.section
      style={{
        backgroundImage
      }}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 "
    >
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl !leading-tight">
          Anson Ou Yang <br /> Full Stack Developer
        </h1>
        <div className="flex flex-row space-x-10 mt-10">
          <MagneticEffect>
            <a
              href="https://github.com/ansonoy"
              target="_blank"
              className="text-5xl"
            >
              <FaGithub />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a
              href="https://www.linkedin.com/in/anson-ou-yang/"
              target="_blank"
              className="text-5xl"
            >
              <FaLinkedin />
            </a>
          </MagneticEffect>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={200}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
        </Canvas>
      </div>
    </motion.section>
  )
}
