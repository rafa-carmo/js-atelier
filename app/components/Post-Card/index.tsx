import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  date: Date
}
export function PostCard({ title, date }: PostCardProps) {
  return (
    <article className="flex flex-col gap-5 w-fit">
      <div className="w-60 h-44 overflow-hidden rounded relative bg-black">
        <img
          src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Post 01"
          className="object-contain opacity-75"
        />
        <p className="text-zinc-200 font-bold text-xs absolute right-1 bottom-1">
          <time dateTime={format(date, 'yyyy-mm-dd')}>
            {format(date, "dd 'de' MMMM'", { locale: ptBR })}
          </time>
        </p>
      </div>

      <h3 className="text-center font-bold line-clamp-2 max-w-[80%]">
        {title}
      </h3>
    </article>
  )
}
