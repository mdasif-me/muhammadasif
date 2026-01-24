"use client"

import { Suspense } from "react"
import Script from "next/script"
import { calculateExperience } from "@/utils/calculate-experience"

function StructuredDataContent() {
  const experience = calculateExperience(2021)
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asif",
    url: "https://muhammadasif.me",
    image: "https://muhammadasif.me/images/muhammadasif-me.webp",
    description: `Senior Frontend Developer with ${experience} years of expertise in crafting responsive, high-performance web applications. Proficient in React, TypeScript, and modern CSS frameworks.`,
    jobTitle: "Senior Frontend Developer",
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full-Stack Development",
      "REST APIs",
      "GraphQL",
      "AWS",
      "Docker",
      "UI/UX Design",
    ],
    sameAs: [
      "https://github.com/mdasif-me",
      "https://linkedin.com/in/mdasif-me",
      "https://twitter.com/mdasif-me",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
    },
  }

  const businessLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://muhammadasif.me/#business",
    name: "Muhammad Asif - Web Development",
    url: "https://muhammadasif.me",
    logo: "https://muhammadasif.me/images/muhammadasif-me.webp",
    image: "https://muhammadasif.me/images/muhammadasif-me.webp",
    description:
      "Professional web development services specializing in React.js and Next.js",
    priceRange: "$$",
    telephone: "+880-193-0248584",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
  }

  const jsonLd = [personLd, businessLd]

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  )
}

export function StructuredData() {
  return (
    <Suspense fallback={null}>
      <StructuredDataContent />
    </Suspense>
  )
}
