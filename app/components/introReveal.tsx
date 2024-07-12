"use client"

import { useEffect } from "react"
import { Inknut_Antiqua, Space_Mono } from "next/font/google"
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate
} from "framer-motion"

import { MagneticEffect } from "./magneticEffect"

const Inknut = Inknut_Antiqua({ subsets: ["latin"], weight: "600" })
const Space = Space_Mono({ subsets: ["latin"], weight: "400" })

export const IntroReveal = () => {
  const colorArray = ["#13FFAA", "#1367C6", "#CE84CF", "#DD335C"]
  const color = useMotionValue(colorArray[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 55%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 3px 16px ${color}`

  useEffect(() => {
    animate(color, colorArray, {
      ease: "easeInOut",
      duration: 20,
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
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl !leading-tight ${Inknut.className} mb-8`}
        >
          Hi, I'm Anson!
        </h1>
        <p className={`${Space.className} text-2xl mb-8 w-2/3`}>
          I am a Full Stack Developer currently @{" "}
          <span className={`hover:text-gray-300`}>
            <a href="https://www.s01ve.io" target="_blank">
              s01ve Cyber Solutions,
            </a>
          </span>{" "}
          based in Calgary.
        </p>
        <div className="flex flex-row space-x-12 mt-6">
          <MagneticEffect>
            <motion.a
              href="https://github.com/ansonoy"
              target="_blank"
              className="w-[4rem] h-[4rem] rounded-full bg-[#020617] grid place-items-center m-2"
              style={{
                border,
                boxShadow
              }}
            >
              <PiGithubLogoFill className="text-4xl text-white" />
            </motion.a>
          </MagneticEffect>
          <MagneticEffect>
            <motion.a
              href="https://www.linkedin.com/in/anson-ou-yang/"
              target="_blank"
              className="w-[4rem] h-[4rem] rounded-full bg-[#020617] grid place-items-center m-2"
              style={{
                border,
                boxShadow
              }}
            >
              <FaLinkedinIn className="text-4xl" />
            </motion.a>
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
