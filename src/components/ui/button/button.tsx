import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { LoadingCircle } from '@/components/ui/common/loading-circle'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50 aria-disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[#36A388] text-white hover:bg-[#36A388]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary-3',
        lavender: 'bg-lavender text-lavender-foreground hover:bg-lavender-3',
        white: 'bg-white text-secondary-2 hover:bg-white-3',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline_secondary:
          'border border-secondary bg-white hover:bg-secondary hover:text-white text-secondary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        aria-disabled={props.disabled}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

function ButtonLoading({
  isLoading,
  children,
  ...props
}: Omit<ButtonProps, 'asChild'> & { isLoading?: boolean }) {
  return <Button {...props}>{isLoading ? <LoadingCircle /> : children}</Button>
}

export { Button, buttonVariants, ButtonLoading, type ButtonProps }
