import { MagneticEffect } from "./magneticEffect"
import { StaggeredText } from "./staggeredText"

export const IntroReveal = () => {
  const nameArray = ["Anson", "Ou", "Yang"]
  const companyArray = ["s01ve", "cyber", "solutions"]
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full bg-[#f7f7f7] text-center space-y-4 font-[500]">
      <div className="flex space-x-8">
        {nameArray.map((text, i) => (
          <StaggeredText text={text} key={i} />
        ))}
      </div>
      <div className="text-4xl text-black uppercase sm:text-6xl md:text-7xl lg:text-8xl">
        <p>
          Full Stack Developer <br />
        </p>

        <p>Currently @ </p>
        <a
          className="flex space-x-8 my-3"
          href="https://s01ve.io"
          target="_blank"
          rel="noreferrer"
        >
          {companyArray.map((text, i) => (
            <StaggeredText text={text} key={i} />
          ))}
        </a>

        <p>BASED IN CALGARY</p>
      </div>

      <div className="flex space-x-8"></div>
    </section>
  )
}
