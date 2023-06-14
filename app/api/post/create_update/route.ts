import { escapeChange } from '@/components/Editor/plugins/escape'
import { CreatePostProps, createPostHygraph } from '@/lib/posts/createpost'
import { publishPost } from '@/lib/posts/publishpost'
import { unpublishPost } from '@/lib/posts/unpublishpost'
import { UpdatePostData, updatePost } from '@/lib/posts/updatepost'
import { NextResponse } from 'next/server'
import slugify from 'slugify'

interface PostBody {
  id?: string
  title: string
  subtitle: string
  imageId?: string
  content: string
  email: string
  stage: 'draft' | 'published'
}

async function publishApi(idPost: string, stage: string, idImage?: string) {
  if (stage === 'published') {
    await publishPost(idPost, idImage)
  }
}

export async function POST(request: Request) {
  const { id, title, content, imageId, subtitle, email, stage }: PostBody =
    await request.json()
  if (!title || !email) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 })
  }

  const slug = slugify(title, { lower: true })
  if (!id) {
    if (!title || !content || !subtitle || !email || !imageId) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 })
    }

    const data: CreatePostProps = {
      title,
      slug,
      subtitle,
      content: escapeChange(content),
      keywords: '',
      userPage: {
        connect: {
          email,
        },
      },
      picture: {
        connect: {
          id: imageId,
        },
      },
    }

    const createdPost = await createPostHygraph(data)
    publishApi(createdPost.id, imageId, stage)

    return NextResponse.json({ createdPost })
  }

  const data: UpdatePostData = {
    title,
    slug,
    subtitle,
    content: escapeChange(content),
    keywords: '',
    picture: imageId
      ? {
          connect: {
            id: imageId,
          },
        }
      : undefined,
  }

  const updated = updatePost(data, id)

  if (stage === 'draft') {
    unpublishPost(id, imageId)
  } else if (stage === 'published') {
    publishApi(id, stage, imageId)
  }
  return NextResponse.json({ updated })
}
