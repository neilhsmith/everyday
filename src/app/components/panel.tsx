import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { cx } from "class-variance-authority"

type PanelElements = "div" | "main" | "section" | "article"
type PanelProps<T extends PanelElements> = ComponentPropsWithoutRef<T> & {
  as?: T
}

export default function Panel<T extends PanelElements = "div">({
  as,
  children,
  ...rest
}: PropsWithChildren<PanelProps<T>>) {
  const Component = as || "div"

  return (
    <Component
      {...rest}
      className={cx(
        "bg-white rounded",
        "flex flex-col justify-start items-stretch",
        "px-4 pt-12 pb-8 gap-10",
        "md:px-10 md:pt-20 md:pb-16 md:gap-14",
        "lg:px-16 lg:pt-24 lg:pb-16 md:gap-20"
      )}
    >
      {children}
    </Component>
  )
}
