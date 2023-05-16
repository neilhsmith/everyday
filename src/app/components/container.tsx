import { PropsWithChildren, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

type ContainerCVA = VariantProps<typeof containerCVA>
const containerCVA = cva(["container"], {
  variants: {
    center: {
      true: "mx-auto",
    },
    relative: {
      true: "relative",
    },
  },
  defaultVariants: {
    center: true,
  },
})

type ContainerProps = ContainerCVA

export default function Container({
  center,
  children,
  relative,
}: PropsWithChildren<ContainerProps>) {
  return <div className={containerCVA({ center, relative })}>{children}</div>
}
