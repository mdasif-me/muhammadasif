import Link from "next/link"
import { Quote } from "@/components"

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
          className={styles.bannerLink}
        >
          <Quote isWrapper text="Get in Touch" />
        </Link>
      </div>
    </div>
  )
}
export default Banner
