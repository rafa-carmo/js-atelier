'use client'
import EditorComponent from '@/components/Editor'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { SpinnerGap } from '@phosphor-icons/react'
import axios from 'axios'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import { InstagramBlock } from '@/components/Editor/plugins/instagram'
import PreviewImage from './PreviewImage'
import { useRouter } from 'next/navigation'

export interface Inputs {
  title: string
  subtitle: string
  image: File[]
  stage: 'draft' | 'published'
}

interface FormPostProps {
  id?: string
  userEmail: string
  title?: string
  subtitle?: string
  stage?: string
  picture?: {
    url: string
  }
  content?: string
}

export default function FormPost({
  id,
  userEmail,
  title,
  subtitle,
  picture,
  content,
  stage = 'draft',
}: FormPostProps) {
  const router = useRouter()
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        validate: (href) => /^https?:\/\//.test(href),
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
        },
      }),
      InstagramBlock,
    ],
    content,
  })

  const [previewImageFile, setPreviewImageFile] = useState<File | null>(null)

  const [sendingState, setSendingState] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const { image } = watch()

  useEffect(() => {
    if (image) {
      setPreviewImageFile(image[0])
    }
  }, [image])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSendingState(true)
    const editorContent = editor?.getHTML()

    const postData = {
      id,
      title: data.title,
      subtitle: data.subtitle,
      content: editorContent,
      email: userEmail,
      prevStage: stage,
      stage: data.stage,
      imageId: undefined,
    }

    if (previewImageFile) {
      const formData = new FormData()
      formData.append('fileUpload', data.image[0])

      const imageUploaded = await fetch('/api/post/upload-image/', {
        method: 'POST',
        body: formData,
      })
        .then((data) => data.json())
        .catch((err) => console.log(err))

      postData.imageId = imageUploaded.id
    }

    const { status } = await axios.post('/api/post/create_update', postData)
    setSendingState(false)
    if (status === 200) {
      return router.push('/admin')
    }
  }

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
                {...register('title', { required: true, value: title })}
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                placeholder="Titulo do post"
              />
              {errors?.title?.message}
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
                {...register('subtitle', { required: true, value: subtitle })}
                id="subtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                placeholder="Subtítulo do post"
              />
              {errors.subtitle?.message}
            </div>
            <div>
              <label
                htmlFor="picture"
                className="block mb-2 text-sm font-medium text-gray-900 text-center py-5"
              >
                Selecionar Imagem
              </label>
              {errors.image?.message}
              <input
                type="file"
                id="picture"
                accept="image/*"
                className="hidden"
                required={!picture}
                {...register('image')}
              />
              <PreviewImage image={previewImageFile} url={picture?.url} />
            </div>
            <div>
              <EditorComponent editor={editor} />
            </div>

            <div className="flex items-center gap-5">
              Estado:
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="draft"
                  value="draft"
                  defaultChecked={!!(stage && stage.toUpperCase() === 'DRAFT')}
                  {...register('stage')}
                />
                <label htmlFor="draft">Rascunho</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="published"
                  value="published"
                  defaultChecked={
                    !!(stage && stage.toUpperCase() === 'PUBLISHED')
                  }
                  {...register('stage')}
                />
                <label htmlFor="published">Publicado</label>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full md:w-2/4 text-white bg-lime-900 hover:bg-lime-700 
                  transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-zinc-300 
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-5"
                disabled={sendingState}
              >
                {sendingState && (
                  <div role="status">
                    <SpinnerGap className="animate-spin fill-white" size={32} />

                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
