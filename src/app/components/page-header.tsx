import { ReactNode } from "react"
import { cx } from "class-variance-authority"

type PageHeaderProps = {
  icon: ReactNode
  headline: string
  subheading: string
}

export default function PageHeader({
  icon,
  headline,
  subheading,
}: PageHeaderProps) {
  return (
    <div className="flex gap-4 justify-start items-center">
      {icon}
      <div>
        <h1
          className={cx(
            "font-light leading-none tracking-tight",
            "text-5xl",
            "md:text-6xl",
            "lg:text-7xl"
          )}
        >
          {headline}
        </h1>
        <p
          className={cx(
            "font-extralight tracking-wide",
            "text-lg ml-6",
            "md:text-xl md:ml-8",
            "lg:text-2xl lg:ml-10"
          )}
        >
          {subheading}
        </p>
      </div>
    </div>
  )
}
