import React from 'react'

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <div className="relative after:absolute after:h-1 after:w-3/4 after:bg-black after:-top-2 after:left-0 after:rounded-full w-fit">
      <span className="font-bold">{children}</span>
    </div>
  )
}
