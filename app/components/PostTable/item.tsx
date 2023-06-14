'use client'
import { Pen, Trash } from '@phosphor-icons/react'
import axios from 'axios'
import moment from 'moment'
import Router from 'next/router'

interface PostItemTableProps {
  id: string
  title: string
  slug: string
  stage: string
  subtitle?: string
  createdAt: string
}

export default function PostItemTable({
  id,
  title,
  subtitle,
  createdAt,
  slug,
}: PostItemTableProps) {
  async function deletePost() {
    if (confirm(`Deseja deletar o post ${title} ?`)) {
      await axios.delete(`/api/post/delete/${id}`)
      alert('Post Deletado')
      Router.reload()
    }
  }
  return (
    <tr>
      <td className="p-2 whitespace-nowrap max-w-[50vw]">
        <a
          href={`/blog/${slug}`}
          className="pl-2 md:pl-7 font-medium text-gray-800 line-clamp-1"
        >
          {title}
        </a>
      </td>
      <td className="p-2 whitespace-nowrap hidden md:block">
        <div className="text-left">{subtitle?.slice(0, 10)}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">
          {moment(createdAt).format('DD/MM/YYYY')}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap w-fit ">
        <div className="flex items-center justify-center gap-1">
          <a href={`/admin/edit/post/${id}`} title="editar">
            <Pen size={20} />
          </a>
          <button onClick={deletePost} title="deletar">
            <Trash size={20} />
          </button>
        </div>
      </td>
    </tr>
  )
}
