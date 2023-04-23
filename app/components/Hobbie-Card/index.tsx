interface ImageProps {
  url: string
  alt?: string
}
interface HobbieCardProps {
  image: ImageProps
  title: string
  description?: string
}

export function HobbieCard({ image, title, description }: HobbieCardProps) {
  return (
    <div className="relative md:max-w-[500px] md:max-h-[480px] max-w-screen-sm group transition-all duration-500 rounded overflow-hidden px-5 md:p-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 md:group-hover:bg-black/50 bg-black/50   transition-all duration-500">
        {' '}
      </div>
      <h2 className="absolute top-5 left-5 font-title text-title font-bold z-20 md:group-hover:text-white  text-white transition-colors duration-700">
        {title}
      </h2>

      <span
        className="absolute 
      opacity-100 md:opacity-0 md:group-hover:opacity-100  
      transition-opacity duration-700 z-20 md:px-10 px-5 pt-3 md:pt-0 grid 
      place-items-center top-0 bottom-0 left-0 right-0 text-white font-title md:text-lg"
      >
        <p className="md:line-clamp-4 line-clamp-3 text-center">
          {description}
        </p>
      </span>
      <img src={image.url} alt={image.alt || title} className="relative z-0" />
    </div>
  )
}
