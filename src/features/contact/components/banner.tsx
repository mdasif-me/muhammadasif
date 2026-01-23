import Image from "next/image"
import Link from "next/link"

import { SOCIALS } from "../constants/social"
import styles from "../styles/contact.module.css"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <article className={styles.bannerText}>
          <h3 className={styles.bannerTitle}>{`LET'S WORK`}</h3>
          <p className="description">
            {`Take the first step towards digital success with Asif. I am eager to craft tailored solutions that drive growth for your business.`}
          </p>
        </article>
        <Link
          href={SOCIALS[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-3 z-10 flex items-center group"
        >
          <Image
            src={"/arrow-border.svg"}
            alt="Get in touch"
            width={120}
            height={120}
            priority
            draggable={false}
            className="w-auto h-auto group-hover:rotate-45 duration-300 ease-in-out"
          />
          <p className="text-xl uppercase duration-300 ease-in-out">
            Get in touch
          </p>
        </Link>
      </div>
    </div>
  )
}
export default Banner
