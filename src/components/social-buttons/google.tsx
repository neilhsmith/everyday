import { ComponentPropsWithoutRef } from "react"
import { cx } from "class-variance-authority"

export default function GoogleButton({
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...rest}
      className={cx(
        "w-12 md:w-14 lg:w-16",
        "group rounded-full aspect-square flex items-center justify-center",
        "bg-[#DE5246] border-[#DE5246] border-2",
        "transition-colors hover:bg-white"
      )}
    >
      <Icon />
    </button>
  )
}

function Icon() {
  return (
    <svg
      className="w-6 md:w-7 lg:w-8 max-h-8 fill-white group-hover:fill-[#DE5246]"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.3459 9.555H10.9263V12.4215H17.6135C17.2745 16.422 14.0182 18.1335 10.9366 18.1335C7.00231 18.1335 3.55085 14.9625 3.55085 10.5C3.55085 6.195 6.83796 2.8665 10.9468 2.8665C14.121 2.8665 15.9802 4.935 15.9802 4.935L17.9319 2.856C17.9319 2.856 15.4255 0 10.8441 0C5.0095 0 0.5 5.04 0.5 10.5C0.5 15.8025 4.74242 21 10.9982 21C16.4938 21 20.5 17.1465 20.5 11.4555C20.5 10.248 20.3459 9.555 20.3459 9.555Z" />
    </svg>
  )
}
