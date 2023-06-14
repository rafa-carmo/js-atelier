import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

export interface PostCardProps {
  id: string
  title: string
  slug: string
  content?: string
  createdAt: string
  picture: { url: string }
  scale?: boolean
}

export function PostCard({
  title,
  slug,
  content,
  createdAt,
  picture,
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
          style={{ backgroundImage: `url("${picture.url}")` }}
        >
          <p className="text-zinc-200 font-bold text-xs absolute right-1 bottom-1">
            <time dateTime={moment(createdAt).format('YYYY-MM-DD')}>
              {moment(createdAt).format('DD [de] MMMM')}
            </time>
          </p>
        </div>

        <a
          href={`/blog/${slug}`}
          className="text-center font-bold line-clamp-2 max-w-[90%] h-fit"
        >
          {title}
        </a>
        <div className="flex flex-1 pt-2 flex-col items-center gap-2 justify-between max-w-[90%]">
          <p className="text-center font-light line-clamp-4 max-w-fit">
            {content?.replace(/<[^>]+>/g, ' ').slice(0, 255)}
          </p>
          <a href={`/blog/${slug}`}>
            <button className="bg-background hover:bg-background/50 py-2 px-4 rounded-lg transition-colors duration-500">
              Continue lendo
            </button>
          </a>
        </div>
      </div>
    </article>
  )
}
