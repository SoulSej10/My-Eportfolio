import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "success" | "warning" | "outline"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-300",
        variant === "default" && "bg-surface-2 text-muted-foreground border border-border",
        variant === "primary" && "bg-primary/10 text-primary border border-primary/20",
        variant === "success" && "bg-green-500/10 text-green-500 border border-green-500/20",
        variant === "warning" && "bg-amber-500/10 text-amber-500 border border-amber-500/20",
        variant === "outline" && "border border-border text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
