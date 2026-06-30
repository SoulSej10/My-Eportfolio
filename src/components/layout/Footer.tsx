import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jess Anthony Tahil. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-destructive fill-destructive" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
