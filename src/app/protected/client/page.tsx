"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ClientProtectPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login?callbackUrl=/protected/client")
    },
  })

  if (status === "loading") {
    return <div>loading...</div>
  }

  return (
    <div>
      this is a client side protected page -{" "}
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
