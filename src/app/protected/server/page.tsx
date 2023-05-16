import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import authOptions from "@/app/auth/auth-options"

export default async function ServerProtectedPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login?callbackUrl=/protected/server")
  }

  return (
    <div>
      this is a server protected page - <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
