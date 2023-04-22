import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  date: Date
  image: string
}
export function PostCard({ title, date, image }: PostCardProps) {
  return (
    <article className="flex flex-col gap-5 w-fit">
      <div className="w-60 h-44 overflow-hidden rounded relative bg-black">
        <img
          src={image}
          alt={title}
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
