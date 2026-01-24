"use client"

import Image from "next/image"

import { IReview } from "./interface"
import styles from "./styles/review.module.css"

const Review = ({ review }: { review: IReview }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.review,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Service",
      "@id": "https://muhammadasif.me/#webdev-service",
      name: "Web Development Services",
      provider: {
        "@type": "Person",
        name: "Muhammad Asif",
        url: "https://muhammadasif.me",
      },
      serviceType: "Web Development",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.card}>
        <div className={styles.content}>
          <h3 className={`${styles.title} gradient-text`}>{review.title}</h3>
          <p className="description">{`"${review.review}"`}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.authorImage}>
            <Image
              src={review.photo}
              alt={review.name}
              width={56}
              height={56}
              className={styles.avatar}
            />
          </div>
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>{review.name}</p>
            <p className={styles.authorDesignation}>{review.designation}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
