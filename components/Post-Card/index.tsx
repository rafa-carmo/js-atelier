interface PostCardProps {
  title: string
}

export function PostCard({ title }: PostCardProps) {
  return (
    <div className="flex flex-col gap-5 w-fit">
      <div className="w-60 h-44 overflow-hidden rounded">
        <img
          src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Post 01"
          className="object-contain"
        />
      </div>
      <h3 className="text-center font-bold text-lg">{title}</h3>
    </div>
  )
}
