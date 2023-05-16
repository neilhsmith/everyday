//export { default } from "next-auth/middleware"
import { withAuth } from "next-auth/middleware"

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
})

export const config = { matcher: ["/settings"] }
