import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-[8rem] font-bold leading-none text-transparent sm:text-[10rem]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Page not found</h2>
        <p className="mt-4 text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been removed or the link might be
          broken.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button className="gap-2">
              <HomeIcon className="size-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-12 text-muted-foreground/50">
        <svg
          className="size-32 sm:size-48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>
    </div>
  )
}

