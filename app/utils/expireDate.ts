import { signOut } from 'next-auth/react'

export function expires(date: string | undefined) {
  if (!date) {
    signOut()
    return
  }
  if (new Date(date) < new Date()) {
    signOut()
  }
}
