import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "stb-inline-flex stb-items-center stb-justify-center stb-whitespace-nowrap stb-rounded-md stb-text-sm stb-font-medium stb-transition-colors focus-visible:stb-outline-none focus-visible:stb-ring-1 focus-visible:stb-ring-neutral-950 disabled:stb-pointer-events-none disabled:stb-opacity-50 dark:focus-visible:stb-ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "stb-bg-neutral-900 stb-text-neutral-50 stb-shadow hover:stb-bg-neutral-900/90 dark:stb-bg-neutral-50 dark:stb-text-neutral-900 dark:hover:stb-bg-neutral-50/90",
        destructive:
          "stb-bg-red-500 stb-text-neutral-50 stb-shadow-sm hover:stb-bg-red-500/90 dark:stb-bg-red-900 dark:stb-text-neutral-50 dark:hover:stb-bg-red-900/90",
        outline:
          "stb-border stb-border-neutral-200 stb-bg-white stb-shadow-sm hover:stb-bg-neutral-100 hover:stb-text-neutral-900 dark:stb-border-neutral-800 dark:stb-bg-neutral-950 dark:hover:stb-bg-neutral-800 dark:hover:stb-text-neutral-50",
        secondary:
          "stb-bg-neutral-100 stb-text-neutral-900 stb-shadow-sm hover:stb-bg-neutral-100/80 dark:stb-bg-neutral-800 dark:stb-text-neutral-50 dark:hover:stb-bg-neutral-800/80",
        ghost:
          "hover:stb-bg-neutral-100 hover:stb-text-neutral-900 dark:hover:stb-bg-neutral-800 dark:hover:stb-text-neutral-50",
        link: "stb-text-neutral-900 stb-underline-offset-4 hover:stb-underline dark:stb-text-neutral-50",
      },
      size: {
        default: "stb-h-9 stb-px-4 stb-py-2",
        sm: "stb-h-8 stb-rounded-md stb-px-3 stb-text-xs",
        lg: "stb-h-10 stb-rounded-md stb-px-8",
        icon: "stb-h-9 stb-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
