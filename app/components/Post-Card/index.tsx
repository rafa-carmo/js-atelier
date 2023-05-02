import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'

interface PostCardProps {
  title: string
  shortDescription: string
  date: Date
  image: string
  scale?: boolean
}
export function PostCard({
  title,
  shortDescription,
  date,
  image,
  scale = false,
}: PostCardProps) {
  return (
    <article className="flex items-center h-[510px]">
      <div
        className={`flex flex-col items-center gap-3 w-96 h-[450px] max-w-sm p-2 bg-white mx-2 ${
          scale && 'hover:scale-110'
        } hover:shadow-md shadow-sm transition-all duration-500 border`}
      >
        <div
          className="w-full h-52 overflow-hidden relative bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${image}")` }}
        >
          <p className="text-zinc-200 font-bold text-xs absolute right-1 bottom-1">
            <time dateTime={format(date, 'yyyy-mm-dd')}>
              {format(date, "dd 'de' MMMM'", { locale: ptBR })}
            </time>
          </p>
        </div>

        <Link
          href="/blog/teste"
          className="text-center font-bold line-clamp-2 max-w-[90%] h-fit"
        >
          {title}
        </Link>
        <div className="flex flex-1 pt-2 flex-col items-center gap-2 justify-between">
          <p className="text-center font-light line-clamp-4">
            {shortDescription}
          </p>
          <Link href="/blog/teste">
            <button className="bg-background hover:bg-background/50 py-2 px-4 rounded-lg transition-colors duration-500">
              Continue lendo
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}
