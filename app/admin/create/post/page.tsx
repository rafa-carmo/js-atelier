'use client'

import { useSession } from 'next-auth/react'

import { expires } from '@/utils/expireDate'
import FormPost from '@/admin/post/form'

export default function EditPost() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return 'Carregando'
  }
  expires(session?.expires)

  return <FormPost userEmail={session?.user?.email || ''} />
}
