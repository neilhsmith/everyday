import "./globals.css"
import { inter } from "@/app/fonts"
import Providers from "@/app/providers"
import SkipToContent from "@/app/components/skip-to-content"
import Header from "@/app/components/header"
import Container from "@/app/components/container"

export const metadata = {
  title: "Everyday",
  description: "TODO",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-page-bg text-black">
        <Providers>
          <Container relative>
            <div className="absolute top-2 right-0">
              <SkipToContent />
            </div>
            <Header />
            <div className="py-14">{children}</div>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
