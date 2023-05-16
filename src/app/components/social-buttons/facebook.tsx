import { ComponentPropsWithoutRef } from "react"
import { cx } from "class-variance-authority"

export default function FacebookButton({
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...rest}
      className={cx(
        "w-12 md:w-14 lg:w-16",
        "group rounded-full aspect-square flex items-center justify-center",
        "bg-[#4267B2] border-[#4267B2] border-2",
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
      className="w-6 md:w-7 lg:w-8 max-h-8 fill-white group-hover:fill-[#4267B2]"
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.25 12H9.75L10.75 8H7.25V6C7.25 4.97 7.25 4 9.25 4H10.75V0.64C10.424 0.597 9.193 0.5 7.893 0.5C5.178 0.5 3.25 2.157 3.25 5.2V8H0.25V12H3.25V20.5H7.25V12Z" />
    </svg>
  )
}
