export default function SkipToContent() {
  return (
    <a
      href="#main"
      tabIndex={1}
      className="sr-only focus:not-sr-only focus:bg-white focus:border-2 focus:border-black focus:px-2 focus:py-1 focus:text-lg"
    >
      Skip to content
    </a>
  )
}
