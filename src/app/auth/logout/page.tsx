import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LogoutButton from "./logout-button"
import authOptions from "@/app/auth/auth-options"

export default async function Logout() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/auth/login?callbackUrl=/auth/logout")
  }

  return (
    <main>
      <LogoutButton />
    </main>
  )
}
