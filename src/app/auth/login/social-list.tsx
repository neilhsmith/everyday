"use client"

import { signIn } from "next-auth/react"
import DiscordButton from "@/components/social-buttons/discord"
import TwitterButton from "@/components/social-buttons/twitter"
import FacebookButton from "@/components/social-buttons/facebook"
import GoogleButton from "@/components/social-buttons/google"

// TODO: prefer the callbackUrl query param if it exists
const options = {
  callbackUrl: "/settings",
}

export default function SocialLoginList() {
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
