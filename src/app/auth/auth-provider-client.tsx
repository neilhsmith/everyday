"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export default function AuthProviderClient({
  children,
  session,
}: PropsWithChildren<{ session: Session | null }>) {
  return (
    <SessionProvider session={session} basePath="/auth">
      {children}
    </SessionProvider>
  )
}
