"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useGSAP } from "@gsap/react"
import { ArrowLeft01Icon } from "@hugeicons-pro/core-stroke-standard"
import { HugeiconsIcon } from "@hugeicons/react"
import gsap from "gsap"

import { IProject } from "./interface"
import styles from "./styles/project.module.css"

const ProjectDetails = ({ project }: { project: IProject }) => {
  const router = useRouter()
  const { name, type, overview, price, url, images, techStack } = project
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.fromTo(
        ".animate-in",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
      )

      tl.fromTo(
        ".image-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      )
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full py-10 md:mt-40 mt-24"
    >
      <div className="xl:space-y-8 space-y-6">
        <Link
          href="#" // Add a placeholder href
          onClick={() => router.back()}
          className="animate-in inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
        >
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm uppercase tracking-wider font-medium">
            Back
          </span>
        </Link>

        <div className={`${styles["project-card"]} animate-in w-full`}>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs uppercase tracking-widest font-semibold text-foreground/70 bg-foreground/5 border border-foreground/10 rounded-sm">
                {type}
              </span>
            </div>

            <h1 className="gradient-text text-3xl md:text-5xl font-semibold">
              {name}
            </h1>

            <p className="description leading-relaxed">{overview}</p>

            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <Image
                src={"/arrow-border.svg"}
                alt="View Live"
                width={100}
                height={100}
                draggable={false}
                priority
                className="w-auto h-auto group-hover:rotate-45 duration-300 ease-in-out"
              />
              <p className="text-base uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform duration-300">
                View Live
              </p>
            </Link>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {project.problem && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  The Problem
                </h3>
                <p className="description">{project.problem}</p>
              </div>
            )}

            {project.approach && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  Approach
                </h3>
                <p className="description">{project.approach}</p>
              </div>
            )}

            {project.solution && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  Solution
                </h3>
                <p className="description">{project.solution}</p>
              </div>
            )}

            {project.results && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  Results
                </h3>
                <p className="description">{project.results}</p>
              </div>
            )}

            {project.businessImpact && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  Business Impact
                </h3>
                <p className="description">{project.businessImpact}</p>
              </div>
            )}

            {project.learning && (
              <div className={`${styles["project-card"]} animate-in`}>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground/70 mb-3">
                  Key Learning
                </h3>
                <p className="description italic">{`"${project.learning}"`}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 space-y-6 h-fit lg:sticky lg:top-40">
            <div className={styles["project-card"]}>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
                  Starting Price
                </h4>
                <p className="text-3xl font-semibold text-secondary">{price}</p>
              </div>
            </div>

            {project.role && (
              <div className={styles["project-card"]}>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
                    My Role
                  </h4>
                  <p className="text-sm font-medium text-foreground/80">
                    {project.role}
                  </p>
                </div>
              </div>
            )}

            {techStack && techStack.length > 0 && (
              <div className={styles["project-card"]}>
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-foreground/70 bg-foreground/5 border border-foreground/10 rounded-sm hover:border-foreground/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className={styles["project-card"]}>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
                  Status
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-sm font-medium text-foreground/80">
                    Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <div className="animate-in space-y-2">
            <h2 className="gradient-text text-2xl md:text-3xl font-semibold">
              Gallery
            </h2>
            <p className="description text-sm">Project screenshots</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, idx) => (
              <div
                key={image}
                className="image-animate relative rounded-lg overflow-hidden group"
              >
                <div className="relative w-full aspect-video bg-card">
                  <Image
                    src={image}
                    alt={`${name} screenshot ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={styles["image-overlay"]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
