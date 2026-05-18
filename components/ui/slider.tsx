import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  className?: string
  value?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
}

function Slider({
  className,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
}: SliderProps) {
  const currentValue = value ?? defaultValue ?? [min]
  const sliderValue = currentValue[0] ?? min

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseFloat(e.target.value)
    onValueChange?.([newVal])
  }

  const percentage = ((sliderValue - min) / (max - min)) * 100

  return (
    <div className={cn("relative w-full h-6 flex items-center", className)} data-slot="slider">
      <div className="relative w-full h-1.5 bg-muted rounded-full">
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Slider"
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 size-4 rounded-full border-2 border-primary bg-white ring-offset-background transition-colors pointer-events-none"
        style={{ left: `calc(${percentage}% - 8px)` }}
      />
    </div>
  )
}

export { Slider }
