"use client"

import { signIn } from "next-auth/react"
import DiscordButton from "@/app/components/social-buttons/discord"
import TwitterButton from "@/app/components/social-buttons/twitter"
import FacebookButton from "@/app/components/social-buttons/facebook"
import GoogleButton from "@/app/components/social-buttons/google"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function SocialLoginList() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") ?? "/"

  const options = useMemo(() => ({ callbackUrl }), [callbackUrl])

  return (
    <ul className="flex gap-2 md:gap-3 lg:gap-4 justify-center">
      <li>
        <GoogleButton />
      </li>
      <li>
        <FacebookButton />
      </li>
      <li>
        <TwitterButton />
      </li>
      <li>
        <DiscordButton onClick={() => signIn("discord", options)} />
      </li>
    </ul>
  )
}
