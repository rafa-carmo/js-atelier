'use client'

import { ArrowDown, ArrowUp } from '@phosphor-icons/react'
import { useState } from 'react'

interface PreviewImageProps {
  url?: string
  image?: File | null
}

export default function PreviewImage({ image, url }: PreviewImageProps) {
  const [hiddenImage, setHiddenImage] = useState(true)
  return (
    <>
      <button
        className="w-full"
        type="button"
        onClick={() => setHiddenImage(!hiddenImage)}
      >
        <p className="flex items-center justify-center gap-3">
          {hiddenImage ? (
            <>
              <span>Preview da imagem</span> <ArrowDown size={10} />
            </>
          ) : (
            <>
              <span>Ocultar imagem</span> <ArrowUp size={10} />
            </>
          )}
        </p>
      </button>

      <img
        src={image ? URL.createObjectURL(image) : url}
        alt="Imagem selecionada"
        className={`${
          hiddenImage ? 'h-0' : 'h-fit'
        } transition-all duration-300`}
      />
    </>
  )
}
