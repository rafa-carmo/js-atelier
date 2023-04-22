import React from 'react'

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <div className="relative after:absolute after:h-1 after:w-3/4 after:bg-black after:-top-3 after:left-0 after:rounded-full w-fit text-2xl font-title">
      <h2 className="font-bold">{children}</h2>
    </div>
  )
}
