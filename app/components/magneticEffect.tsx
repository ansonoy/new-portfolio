"use client"
import { motion } from "framer-motion"
import { ReactNode, useRef, useState } from "react"

type MagneticEffectProps = {
  children: ReactNode
}

export const MagneticEffect = ({ children }: MagneticEffectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e: any) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { width, height, left, top } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      setPosition({ x, y })
    }
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
