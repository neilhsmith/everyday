import { ReactNode } from "react"
import AuthProvider from "@/app/auth/auth-provider"

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
