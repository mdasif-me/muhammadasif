"use client"

import React from "react"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { questions } from "../constants"
import styles from "../styles/faq.module.css"
import Question from "./question"

const Questions = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className={styles.questionsContainer}>
      <Carousel
        orientation="vertical"
        setApi={setApi}
        className="w-full flex-1 flex flex-col"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <div className={styles.navigation}>
          <CarouselPrevious className={styles.navButton} />

          <div className={styles.indicators}>
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  styles.indicator,
                  current === index + 1 ? styles.indicatorActive : ""
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className={styles.navButton} />
        </div>
        <CarouselContent className="-mt-1 max-h-[700px]">
          {questions.map((question, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <Question question={question} isActive={current === index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Questions
