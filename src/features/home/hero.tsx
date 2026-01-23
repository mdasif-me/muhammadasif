import Image from "next/image"
import Link from "next/link"

import Skills from "@/components/skills"

import AnimatedTitle from "./animated-title"
import { core_skills, description, SOCIALS } from "./constants"
import styles from "./styles/home.module.css"

const Hero = () => {
  return (
    <section className="flex lg:flex-nowrap flex-wrap items-center gap-5 lg:mt-56 mt-40">
      <div className={`${styles.card} lg:flex-1 relative`}>
        <AnimatedTitle />
        <p className={styles.description}>{description}</p>
        <Skills
          duration={"[--duration:160s]"}
          content={core_skills}
          className="relative overflow-hidden bg-[#0F0F0F] rounded-lg py-2 min-h-[60px]"
        />
        <Link
          href={"/services"}
          className="absolute right-6 top-20 z-10 sm:flex hidden items-start group"
        >
          <Image
            src={"/quote.svg"}
            alt="Get a quote"
            width={120}
            height={120}
            priority
            className="w-auto h-auto group-hover:rotate-[24deg] duration-300 ease-in-out"
          />
          <p className="text-xl group-hover:pt-6 duration-300 ease-in-out">
            GET A QUOTE
          </p>
        </Link>
      </div>
      <div
        className={`${styles.background_profile} relative lg:max-h-full md:max-h-[520px] max-h-96`}
      >
        <Link href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer">
          <button
            className={`${styles.profile_button} absolute right-[22px] top-[22px] cursor-pointer`}
          >
            <span className="sr-only">{SOCIALS[0].label}</span>
            {SOCIALS[0].name}
          </button>
        </Link>
        <Link
          href={SOCIALS[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute gap-3 left-[22px] bottom-[22px] z-10 flex items-center group"
        >
          <Image
            src={"/arrow.svg"}
            alt="See more"
            width={120}
            height={120}
            priority
            className="w-auto h-auto group-hover:rotate-45 duration-300 ease-in-out"
          />
          <p className="text-xl uppercase duration-300 ease-in-out">See more</p>
        </Link>
      </div>
    </section>
  )
}

export default Hero
