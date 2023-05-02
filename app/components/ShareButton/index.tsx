'use client'
import { FacebookLogo, TwitterLogo, WhatsappLogo } from '@phosphor-icons/react'

interface ShareButtonProps {
  type: 'whatsapp' | 'facebook' | 'twitter'
  url: string
}

const props = {
  whatsapp: {
    icon: <WhatsappLogo size={32} />,
    bg: 'bg-lime-500',
    text: 'text-black',
    title: 'WhatsApp',
  },
  facebook: {
    icon: <FacebookLogo size={32} />,
    bg: 'bg-blue-500',
    text: 'text-white',
    title: 'Facebook',
  },
  twitter: {
    icon: <TwitterLogo size={32} />,
    bg: 'bg-sky-500',
    text: 'text-white',
    title: 'Twitter',
  },
}

export function ShareButton({ type, url }: ShareButtonProps) {
  return (
    <div
      className={`flex items-center gap-2  rounded-full px-4 py-2 font-bold text-white ${props[type].bg} ${props[type].text}`}
    >
      {props[type].icon}
      {props[type].title}
    </div>
  )
}
