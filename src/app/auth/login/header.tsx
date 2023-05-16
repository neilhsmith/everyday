import PageHeader from "@/app/components/page-header"
import LoginIcon from "./icon"

export default function LoginHeader() {
  return (
    <PageHeader
      icon={<LoginIcon />}
      headline="login"
      subheading="welcome back!"
    />
  )
}
