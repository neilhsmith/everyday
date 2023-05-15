import UserList from "@/components/user-list"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-flex-start p-24">
      <p>hi</p>
      <Suspense fallback={<p>loading</p>}>
        {/* @ts-expect-error Server Component */}
        <UserList />
      </Suspense>
    </main>
  )
}
