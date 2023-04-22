'use client'
import Link from 'next/link'

import { ReactNode } from 'react'

import { usePathname } from 'next/navigation'

interface LinkProps {
  title: string
  link: string
}

interface HandleLinkProps {
  href: string
  className: string
  children: ReactNode
}

function HandleLink({ children, className, href }: HandleLinkProps) {
  const pathname = usePathname()
  const component =
    href.startsWith('#') && pathname === '/' ? (
      <a href={href} className={className}>
        {children}
      </a>
    ) : (
      <Link href={href} className={className} scroll={true}>
        {children}
      </Link>
    )
  return component
}

export function LinkMenu({ link, title }: LinkProps) {
  return (
    <HandleLink
      href={link}
      className="w-full h-12 font-bold text-lg px-10 pt-5 border-b hover:bg-background transition-colors duration-300 cursor-pointer"
    >
      <span>{title}</span>
    </HandleLink>
  )
}
