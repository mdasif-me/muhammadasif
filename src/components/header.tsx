import Image from "next/image"
import Link from "next/link"

const Header = ({
  name,
  isQuote = false,
}: {
  name: string
  isQuote?: boolean
}) => {
  return (
    <article className="flex w-full md:min-h-[100px] h-fit justify-between flex-wrap md:py-3 py-6 px-6 items-center rounded-xl bg-secondary-foreground">
      <p className="header-text">{name}</p>
      {isQuote && (
        <Link
          href={""}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute gap-3 left-[22px] bottom-[22px] z-10 flex items-center group"
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
          <p className="text-xl uppercase duration-300 ease-in-out">View all</p>
        </Link>
      )}
    </article>
  )
}

export default Header
