import Link from "next/link"
import Panel from "@/app/components/panel"
import PageHeader from "@/app/components/page-header"
import LoginIcon from "@/app/auth/login/icon"
import LoginForm from "@/app/auth/login/form"
import SocialList from "@/app/auth/login/social-list"

export default function Login() {
  return (
    <Panel as="main" id="main">
      <PageHeader
        icon={<LoginIcon />}
        headline="login"
        subheading="welcome back!"
      />
      <div className="my-4 md:my-6 lg:my-8">
        <LoginForm />
      </div>
      <div className="text-center">
        <p className="mb-4">Or sign in using</p>
        <SocialList />
      </div>
      <p className="text-center">
        Need an account?{" "}
        <Link href="/auth/register" className="underline underline-offset-4">
          Register here!
        </Link>
      </p>
    </Panel>
  )
}
