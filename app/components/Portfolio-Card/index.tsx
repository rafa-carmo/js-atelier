interface ImageProps {
  url: string
  alt?: string
}

interface PortfolioCardProps {
  title: string
  description: string
  image: ImageProps
}

export function PortfolioCard({
  title,
  description,
  image,
}: PortfolioCardProps) {
  return (
    <div className="max-w-md flex flex-col gap-5">
      <h3 className="font-bold text-title font-title">{title}</h3>
      <span>{description}</span>
      <img
        className="w-full md:h-[540px] rounded object-fill"
        src={image.url}
        alt={image.alt || title}
      />
    </div>
  )
}
