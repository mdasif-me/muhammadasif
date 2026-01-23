import { JSX } from "react"
import Image from "next/image"

/**
 * Reusable ProcessArrow component for decorative arrows
 */
function ProcessArrow({
  rotation = "",
  justify = "center",
}: {
  rotation?: string
  justify?: string
}) {
  return (
    <div className={`flex ${justify} w-full p-3`}>
      <Image
        src="/images/about/arrow.svg"
        alt="Decorative line graphic"
        width={97}
        height={97}
        className={`object-contain object-center shrink-0 ${rotation}`}
        draggable={false}
      />
    </div>
  )
}

/**
 * The Process component displays the process of developing software, including understanding the project, conceptualizing and designing the software, developing and implementing the code, testing and fixing issues, deploying the software, and continuously monitoring performance and refining the product.
 *
 * @returns {JSX.Element} A JSX element containing the process of developing software.
 */
export default function Process(): JSX.Element {
  return (
    <div className="px-8 md:px-24">
      <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center">
        <div className="relative w-fit shrink-0 lg:mt-0 mt-16 sm:mt-20">
          <Image
            src="/images/about/line-freehand-first.svg"
            alt="Decorative line graphic"
            width={370}
            height={216}
            className="object-contain object-center md:rotate-[22.854deg] shrink-0 w-[280px] xs:w-[320px] sm:w-[370px]"
            priority
            draggable={false}
          />
          <h4 className="absolute right-6 xs:right-8 md:right-16 bottom-12 xs:bottom-14 md:bottom-12 text-xl xs:text-2xl font-semibold uppercase text-secondary">
            My process
          </h4>
        </div>
        <div className="lg:mt-80 mt-16 sm:mt-20">
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Discovery & Planning: I collaborate with stakeholders to understand requirements, define project scope, assess technical feasibility, and establish clear milestones and deliverables.`}
          </h4>
          <ProcessArrow />
        </div>
      </div>
      <div className="flex items-center lg:justify-between justify-center mt-4 sm:mt-0">
        <div></div>
        <div>
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Architecture & Design: I design scalable system architecture, create technical specifications, plan database schemas, and craft intuitive user interfaces aligned with best practices.`}
          </h4>
          <ProcessArrow
            rotation="-rotate-80"
            justify="lg:justify-start justify-center"
          />
        </div>
      </div>
      <div className="flex items-center lg:justify-between justify-center mt-4 sm:mt-0">
        <div>
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Development: I write clean, maintainable code following industry standards, implement version control, conduct peer code reviews, and ensure documentation for future reference.`}
          </h4>
          <ProcessArrow />
        </div>
        <div></div>
      </div>
      <div className="flex items-center lg:justify-between justify-center mt-4 sm:mt-0">
        <div>
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Testing & QA: I perform comprehensive testing including unit tests, integration tests, and end-to-end testing, ensuring code quality, security, and performance optimization.`}
          </h4>
          <ProcessArrow
            rotation="-rotate-80"
            justify="lg:justify-end justify-center"
          />
        </div>
        <div></div>
      </div>
      <div className="flex items-center lg:justify-between justify-center mt-4 sm:mt-0">
        <div></div>
        <div>
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Deployment: I implement CI/CD pipelines, execute staged rollouts with proper environment configuration, verify deployment success, and maintain rollback strategies for safety.`}
          </h4>
          <ProcessArrow justify="lg:justify-start justify-center" />
        </div>
      </div>
      <div className="flex items-center lg:justify-between justify-center mt-4 sm:mt-0">
        <div>
          <h4 className="gradient-text text-base! md:text-xl! font-normal! md:font-bold! !normal-case max-w-4xl px-2 md:px-0">
            {`Monitoring & Support: I continuously monitor system performance, track errors, gather user feedback, implement improvements, and provide ongoing maintenance to ensure long-term success.`}
          </h4>
        </div>
        <div></div>
      </div>
    </div>
  )
}
