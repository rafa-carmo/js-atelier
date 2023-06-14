import { NextResponse } from 'next/server'
import axios from 'axios'

const token = process.env.HYGRAPH_TOKEN

export async function POST(request: Request) {
  const body = await request.formData()

  const imageRequest = await axios.post(
    'https://api-sa-east-1.hygraph.com/v2/clhj92mmo2mue01t9gi0g8vom/master/upload',
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (imageRequest.status >= 400) {
    return NextResponse.json({ error: 'error on upload image' })
  }
  const imageUploaded = imageRequest.data

  return NextResponse.json({ ...imageUploaded })
}
