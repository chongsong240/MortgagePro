import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

/**
 * Numeric fields are controlled with numbers (`value={6.5}`), so clearing one
 * writes "0" back into the box. React deliberately skips rewriting a
 * `type="number"` input while the string in the DOM parses to the same number
 * ("05" != 5 is false in its loose comparison), which leaves that zero sitting
 * in front of whatever gets typed next. Strip it before the change handler
 * runs, so the field never shows "05" for a value of 5.
 */
export function stripLeadingZeros(value: string) {
  return value.replace(/^(-?)0+(?=\d)/, "$1")
}

function Input({ className, type, onChange, ...props }: React.ComponentProps<"input">) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const input = event.currentTarget
      const normalized = stripLeadingZeros(input.value)
      if (normalized !== input.value) {
        input.value = normalized
      }
    }
    onChange?.(event)
  }

  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      onChange={handleChange}
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }

