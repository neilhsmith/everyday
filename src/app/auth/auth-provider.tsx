import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import AuthProviderClient from "./auth-provider-client"
import authOptions from "@/lib/auth"

// server component which grabs the session and passes to a Context client component so that the session is available
// to all components, server & client side
export default async function AuthProvider({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log("session", session)

  return <AuthProviderClient session={session}>{children}</AuthProviderClient>
}
