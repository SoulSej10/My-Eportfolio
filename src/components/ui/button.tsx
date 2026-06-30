import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
    secondary:
      "bg-surface-2 text-foreground border border-border hover:bg-card-hover hover:border-primary/30",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-surface-2",
    outline:
      "border border-border bg-transparent hover:bg-surface-2 hover:border-primary/30 text-foreground",
    gradient:
      "relative overflow-hidden bg-gradient-to-r from-primary to-accent-2 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
  },
  size: {
    sm: "h-9 px-4 text-sm gap-2",
    md: "h-11 px-6 text-sm gap-2",
    lg: "h-12 px-8 text-base gap-2.5",
    icon: "h-10 w-10",
  },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
  href?: string
  target?: string
  rel?: string
}

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    className
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {props.children}
      </a>
    )
  }

  if (asChild) {
    return <span className={classes}>{props.children}</span>
  }

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
