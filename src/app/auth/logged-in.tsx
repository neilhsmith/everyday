"use client"

import { ReactNode } from "react"
import { useSession } from "next-auth/react"

export default function LoggedIn({ children }: { children: ReactNode }) {
  const { status } = useSession()

  if (status !== "authenticated") {
    return null
  }

  return <>{children}</>
}
