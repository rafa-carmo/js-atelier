'use client'

import { useSession } from 'next-auth/react'

import { expires } from '@/utils/expireDate'
import FormPost from '@/admin/post/form'
import { useEffect, useState } from 'react'
import axios from 'axios'

export interface PostProps {
  id: string
  title: string
  subtitle?: string
  stage: string
  picture: {
    url: string
  }
  content?: string
}

interface EditPostProps {
  params: { id: string }
}
async function getPost(id: string, setData: (post: PostProps) => void) {
  const { data, status } = await axios.get<{ post: PostProps }>(
    `/api/post/get/${id}`,
  )
  if (status === 200) {
    setData(data.post)
  }
}
export default function EditPost({ params }: EditPostProps) {
  const { data: session, status } = useSession()
  const [postData, setPostData] = useState<PostProps | null>(null)

  useEffect(() => {
    getPost(params.id, setPostData)
  }, [params.id])
  if (status === 'loading') {
    return 'Carregando'
  }
  expires(session?.expires)

  return (
    <>
      {postData ? (
        <FormPost
          userEmail={session?.user?.email || ''}
          {...postData}
          id={params.id}
        />
      ) : (
        <p>Post Não encontrado</p>
      )}
    </>
  )
}
