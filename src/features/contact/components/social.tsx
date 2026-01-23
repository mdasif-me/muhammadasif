import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"

import styles from "../styles/contact.module.css"

interface SocialProps {
  name: string
  href: string
  description: string
  icon: IconSvgElement
  className?: string
  iconWidth?: number
  iconHeight?: number
}

const Social = ({
  name,
  href,
  description,
  icon: Icon,
  className = "",
  iconWidth = 34,
  iconHeight = 34,
}: SocialProps): JSX.Element => {
  return (
    <div className={`${styles.socialCard} ${className}`}>
      <div className={styles.socialHeader}>
        <div className={styles.iconContainer}>
          <HugeiconsIcon
            className="text-primary shrink-0"
            width={iconWidth}
            height={iconHeight}
            icon={Icon}
          />
        </div>
        <Link
          href={href}
          aria-label={`Visit ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-3 z-10 flex items-center group"
        >
          <Image
            src={"/arrow-border.svg"}
            alt="View All"
            width={120}
            height={120}
            priority
            draggable={false}
            className="w-auto h-auto group-hover:rotate-45 duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="flex-1"></div>
      <article className={styles.socialContent}>
        <h1 className="gradient-text uppercase">{name}</h1>
        <p className="description">{description}</p>
      </article>
    </div>
  )
}

export default Social
