'use client'
import Editor from '@/components/Editor'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp } from '@phosphor-icons/react'
import { expires } from '@/utils/expireDate'

interface CreatePostProps {
  title: String
  slug: String
  subtitle: String
  content: string
  keywords: String
  userPage: {
    connect: {
      email: string
    }
  }
  picture: {
    connect: {
      id: string
    }
  }
}

export interface Inputs {
  title: string
  subtitle: string
  image: File[]
  content: string
}

export default function Post() {
  // function handlePost() {}
  const { data: session, status } = useSession()

  const [previewImage, setPreviewImage] = useState<File | null>(null)
  const [hiddenImage, setHiddenImage] = useState(true)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const { image } = watch()

  useEffect(() => {
    if (image) {
      setPreviewImage(image[0])
    }
  }, [image])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData()
    formData.append('fileUpload', data.image[0])

    const imageUploaded = await fetch('/api/post/upload-image/', {
      method: 'POST',
      body: formData,
    }).then((data) => data.json())

    await fetch('/api/post/create', {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        subtitle: data.subtitle,
        imageId: imageUploaded.id,
        content: data.content,
        email: session?.user?.email,
      }),
    })
  }
  if (status === 'loading') {
    return 'Carregando'
  }
  expires(session?.expires)

  return (
    <div className="flex flex-1 py-2 md:py-24 items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 xl:p-0 container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            className="space-y-4 md:space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Titulo
              </label>
              <input
                type="string"
                {...register('title', { required: true })}
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                placeholder="Titulo do post"
              />
            </div>
            <div>
              <label
                htmlFor="subtitle"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subtítulo
              </label>
              <input
                type="string"
                {...register('subtitle', { required: true })}
                id="subtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                placeholder="Subtítulo do post"
              />
            </div>
            <div>
              <label
                htmlFor="picture"
                className="block mb-2 text-sm font-medium text-gray-900 text-center py-5"
              >
                {previewImage ? 'Trocar' : 'Selecione uma'} Imagem
              </label>
              <input
                type="file"
                id="picture"
                accept="image/*"
                className="hidden"
                required
                {...register('image')}
              />
              {previewImage && (
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
                    src={URL.createObjectURL(previewImage)}
                    alt="Imagem selecionada"
                    className={`${
                      hiddenImage ? 'h-0' : 'h-fit'
                    } transition-all duration-300`}
                  />
                </>
              )}
            </div>
            <div>
              <Editor />
            </div>

            <div className="flex gap-2 md:gap-5 flex-col md:flex-row">
              <button
                type="button"
                className="w-full text-white bg-amber-900 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Salvar como Rascunho
              </button>
              <button
                type="button"
                className="w-full text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Salvar e Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
