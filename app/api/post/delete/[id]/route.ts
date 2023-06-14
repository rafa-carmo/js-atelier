import { deletePost } from '@/lib/posts/deletepost'
import { NextResponse } from 'next/server'

interface PostParams {
  params: {
    id: string
  }
}

export async function DELETE(request: Request, { params }: PostParams) {
  const id = params.id
  if (!id) {
    return NextResponse.json({}, { status: 400 })
  }

  await deletePost(id)
  return NextResponse.json({}, { status: 200 })
}
