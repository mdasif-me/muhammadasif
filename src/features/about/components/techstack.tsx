"use client"

import Image from "next/image"

import { useMediaQuery } from "../../../hooks/use-media-query"

/**
 * The TechStack component displays a section of the page that highlights the tech stack used in the project.
 * It includes a decorative line graphic, a heading, and a series of images representing the different
 * technologies used in the project.
 */
export default function TechStack() {
  const isMdAndSMDevice = useMediaQuery("only screen and (max-width: 1024px)")
  const isXsDevice = useMediaQuery("only screen and (max-width: 480px)")

  const getImageSize = (base: number, md: number, xs: number) => {
    if (isXsDevice) return xs
    if (isMdAndSMDevice) return md
    return base
  }

  return (
    <div>
      <div className="relative w-fit shrink-0 mt-16 sm:mt-20 px-8 md:px-24">
        <Image
          src="/images/about/line-freehand-second.svg"
          alt="Decorative line graphic"
          width={370}
          height={216}
          className="object-contain object-center rotate-5 shrink-0 w-[280px] xs:w-[320px] sm:w-[370px]"
          priority
          draggable={false}
        />
        <h4 className="absolute left-10 md:left-32 bottom-12 xs:bottom-14 sm:bottom-16 text-xl xs:text-2xl font-semibold uppercase text-secondary">
          My Tech stack
        </h4>
      </div>
      <section className="space-y-8 sm:space-y-10 px-2 xs:px-4 sm:px-0">
        <div className="flex justify-center w-full p-2 sm:p-3">
          <Image
            src="/images/icons/javascript.svg"
            alt="JavaScript logo"
            width={getImageSize(200, 150, 120)}
            height={100}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-around items-center w-full gap-2 sm:gap-4">
          <Image
            src="/images/icons/typescript.svg"
            alt="TypeScript logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
          <Image
            src="/images/icons/prisma.svg"
            alt="Prisma logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-center items-center w-full p-2 sm:p-3">
          <Image
            src="/images/icons/go.svg"
            alt="Go logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-around items-center w-full gap-1 xs:gap-2 sm:gap-4">
          <Image
            src="/images/icons/expressjs.svg"
            alt="Express.js logo"
            width={getImageSize(200, 80, 60)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
          <Image
            src="/images/icons/react.svg"
            alt="React logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-50"
            draggable={false}
          />
          <Image
            src="/images/icons/nextjs.svg"
            alt="Next.js logo"
            width={getImageSize(200, 80, 60)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-center items-center w-full p-2 sm:p-3">
          <Image
            src="/images/icons/postgresql.svg"
            alt="PostgreSQL logo"
            width={getImageSize(250, 150, 120)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-around items-center w-full gap-2 sm:gap-4">
          <Image
            src="/images/icons/docker.svg"
            alt="Docker logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
          <Image
            src="/images/icons/nginx.svg"
            alt="Nginx logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
        <div className="flex justify-center w-full p-2 sm:p-3">
          <Image
            src="/images/icons/aws.svg"
            alt="AWS logo"
            width={getImageSize(200, 120, 90)}
            height={getImageSize(100, 40, 30)}
            className="object-contain object-center shrink-0 opacity-[0.5]"
            draggable={false}
          />
        </div>
      </section>
    </div>
  )
}
