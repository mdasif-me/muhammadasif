"use client"

import Image from "next/image"
import { Download01Icon } from "@hugeicons-pro/core-stroke-standard"
import { HugeiconsIcon } from "@hugeicons/react"

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/asif-frontend-resume.pdf"
    link.download = "asif-frontend-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      <div className="relative w-full">
        <div className="w-full h-[250px] xs:h-[290px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] -z-50 flex flex-col items-center justify-center overflow-hidden">
          <Image
            src="/images/about/about-glow.svg"
            alt="About glow"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src="/images/muhammadasif-me.webp"
            alt="About Muhammad Asif"
            width={320}
            height={320}
            className="object-contain object-center rounded-full z-10 border-4 border-primary/10 absolute xs:-bottom-[130px] sm:-bottom-[125px] -bottom-[120px] left-1/2 -translate-x-1/2 w-[240px] h-[240px] xs:w-[260px] xs:h-[260px] sm:w-[320px] sm:h-[320px]"
            priority
          />
          <Image
            src="/images/about/active.svg"
            alt="Active status icon"
            width={52}
            height={52}
            className="object-contain object-center absolute xs:-bottom-[115px] sm:-bottom-[110px] -bottom-[105px] left-1/2 xs:translate-x-16 sm:translate-x-20 translate-x-14 z-20 w-[44px] h-[44px] xs:w-[48px] xs:h-[48px] sm:w-[52px] sm:h-[52px]"
            priority
          />
        </div>
      </div>
      <article className="mt-32 xs:mt-36 sm:mt-40 text-center max-w-6xl mx-auto space-y-5 px-8">
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl font-semibold leading-normal uppercase">
          Muhammad Asif
        </h1>
        <div className="text-sm xs:text-base md:text-lg lg:text-xl font-thin leading-6 xs:leading-7 space-y-4 xs:space-y-5 text-justify sm:text-center">
          <p>
            {`Hello, I'm Muhammad Asif, a Software Engineer passionate about developing web solutions, from simple interfaces to complex applications. With several years of experience, I am motivated by the daily challenges that combine creativity and problem-solving.`}
          </p>
          <p>
            {`I primarily work with React and Angular for front-end development, and Node.js or Python for back-end tasks. I prioritize writing clean, readable code and continuously seek ways to improve performance and design.`}
          </p>
          <p>
            {`When I'm not coding, I'm usually exploring new frameworks, contributing to open-source projects, or catching up on tech talks. I love being a part of the ever-evolving software world; there's always something new to learn, and that's what keeps me going.`}
          </p>
        </div>
        <div className="flex justify-center w-full pt-5">
          <button
            onClick={handleDownloadResume}
            className="flex items-center max-w-[410px] w-full py-3.5 xs:py-4 sm:py-[18px] px-4 xs:px-5 sm:px-6 justify-center gap-2 xs:gap-2.5 shrink-0 rounded-xl sm:rounded-[12px] border border-[#A7BEB4] hover:bg-primary/20 cursor-pointer transition-all duration-250 ease-in"
          >
            <HugeiconsIcon
              icon={Download01Icon}
              width={20}
              height={20}
              className="shrink-0 xs:w-6 xs:h-6"
            />
            <p className="text-base xs:text-lg font-medium leading-6 xs:leading-7 uppercase text-[#E1EAE5]">
              RESUME
            </p>
          </button>
        </div>
      </article>
    </div>
  )
}

export default Hero
