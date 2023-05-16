"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/login" })}>
      Sign out
    </button>
  )
}
