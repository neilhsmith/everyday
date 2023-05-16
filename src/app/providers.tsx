import { ReactNode } from "react"
import AuthProvider from "@/app/auth/auth-provider"

export default function Providers({ children }: { children: ReactNode }) {
  // @ts-expect-error Server Component
  return <AuthProvider>{children}</AuthProvider>
}
