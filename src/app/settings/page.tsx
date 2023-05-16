import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import authOptions from "@/app/auth/auth-options"

export default async function Settings() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/auth/login?callbackUrl=/settings")
  }

  return (
    <main>
      <h1>Settings</h1>
    </main>
  )
}
