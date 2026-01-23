import { ArrowRight02Icon } from "@hugeicons-pro/core-stroke-standard"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"

interface IQuoteProps {
  text?: string
  onClick?: () => void
  className?: string
  iconColor?: string
  isWrapper?: boolean
  isBordered?: boolean
  isBackground?: boolean
  isText?: boolean
  disabled?: boolean
}

const Quote = ({
  text = "GET A QUOTE",
  onClick,
  className,
  disabled = false,
  isWrapper = false,
  isBordered = false,
  isBackground = false,
  isText = true,
  iconColor,
}: IQuoteProps) => {
  const finalIconColor =
    iconColor ??
    (isBordered || isBackground ? "rgba(225, 234, 229, 0.5)" : "#0F0F0F")

  return (
    <div className={cn("quote_container group -ml-3", className)}>
      <div
        className={cn(
          isWrapper ? "quote_wrapper" : "quote_wrapper_without_border",
          "cursor-pointer",
          disabled && "cursor-not-allowed opacity-50"
        )}
        onClick={disabled ? undefined : onClick}
      >
        <button
          className={cn(
            "cursor-pointer",
            isBordered
              ? "quote_circle_bordered"
              : isBackground
                ? "quote_circle bg-[#E1EAE5]!"
                : "quote_circle"
          )}
          disabled={disabled}
          aria-label={text}
        >
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="quote_arrow"
            strokeWidth={2}
            color={finalIconColor}
          />
        </button>
      </div>
      {isText && (
        <p
          className={cn(
            "quote_text truncate",
            (isBordered || isBackground) && "text-[#F3F6F5]!"
          )}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export default Quote
