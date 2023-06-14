import { PostProps } from '@/admin/page'
import PostItemTable from './item'

interface PostTableProps {
  posts: PostProps[]
}
export default function PostTable({ posts }: PostTableProps) {
  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="pl-2 md:pl-7 font-semibold text-left">Título</div>
          </th>
          <th className="p-2 whitespace-nowrap hidden md:block">
            <div className="font-semibold text-left">Descrição</div>
          </th>
          <th className="p-2 whitespace-nowrap w-fit">
            <div className="font-semibold text-center">Postagem</div>
          </th>
          <th className="p-2 whitespace-nowrap w-10"></th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-gray-100">
        {posts.map((post) => (
          <PostItemTable key={post.id} {...post} />
        ))}
      </tbody>
    </table>
  )
}
