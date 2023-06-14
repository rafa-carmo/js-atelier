'use client'

import {
  ArrowArcLeft,
  ArrowArcRight,
  InstagramLogo,
  Link as LinkIcon,
  List,
  ListNumbers,
  Quotes,
  TextBolder,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
} from '@phosphor-icons/react'
import { EditorContent, Editor } from '@tiptap/react'
import { useCallback } from 'react'

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const setInstagram = useCallback(() => {
    const instaUrl = editor?.getAttributes('instagram').url
    const insta = window.prompt('URL', instaUrl)

    // cancelled
    if (insta === null) {
      return
    }

    // empty
    if (insta === '') {
      return null
    }

    // update link

    editor
      ?.chain()
      .insertContent(
        `&lt;blockquote class="instagram-media" 
        data-instgrm-permalink="${insta}?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:520px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
        &lt;/blockquote>`,
      )
      .focus()
      .run() // add a new video element
  }, [editor])

  if (!editor) {
    return null
  }
  const options = [
    {
      name: 'bold',
      title: 'Negrito',
      onClick: () => editor.chain().focus().toggleBold().run(),
      icon: <TextBolder size={20} weight="bold" />,
      active: editor.isActive('bold'),
    },
    {
      name: 'italic',
      title: 'Itálico',
      onClick: () => editor.chain().focus().toggleItalic().run(),
      icon: <TextItalic size={20} weight="bold" />,
      active: editor.isActive('italic'),
    },
    {
      name: 'strike',
      title: 'Riscar',
      onClick: () => editor.chain().focus().toggleStrike().run(),
      icon: <TextStrikethrough size={20} weight="bold" />,
      active: editor.isActive('strike'),
    },
    {
      name: 'heading',
      title: 'Título 2',
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: <TextHTwo size={20} weight="bold" />,
      active: editor.isActive('heading', { level: 2 }),
    },
    {
      name: 'heading',
      title: 'Título 3',
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: <TextHThree size={20} weight="bold" />,
      active: editor.isActive('heading', { level: 3 }),
    },
    {
      name: 'bulletList',
      title: 'Lista Comum',
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      icon: <List size={20} weight="bold" />,
      active: editor.isActive('bulletList'),
    },
    {
      name: 'orderedList',
      title: 'Lista Numerada',
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <ListNumbers size={20} weight="bold" />,
      active: editor.isActive('orderedList'),
    },
    {
      name: 'blockquote',
      title: 'Citação',
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <Quotes size={20} weight="bold" />,
      active: editor.isActive('blockquote'),
    },
  ]

  return (
    <div className="flex items-center  bg-zinc-100 px-2 py-1">
      <div className="flex items-center flex-1 md:justify-start justify-between md:gap-3">
        {options.map((option) => (
          <button
            type="button"
            onClick={option.onClick}
            className={`p-[0.1rem] rounded-sm hover:bg-zinc-300 transition-all ${
              option.active ? 'bg-zinc-500 text-white' : ''
            } `}
            key={`option-${option.title}`}
            title={option.title}
          >
            {option.icon}
          </button>
        ))}
        <button
          className="p-[0.1rem] rounded-sm hover:bg-zinc-300 transition-all"
          title="Link"
          type="button"
          onClick={setLink}
        >
          <LinkIcon weight="bold" size={20} />
        </button>
        <button
          className="p-[0.1rem] rounded-sm hover:bg-zinc-300 transition-all"
          title="Post do Instagram"
          type="button"
          onClick={setInstagram}
        >
          <InstagramLogo weight="bold" size={20} />
        </button>

        <button onClick={() => editor.chain().focus().undo().run()}>
          <ArrowArcLeft size={20} weight="bold" />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <ArrowArcRight size={20} weight="bold" />
        </button>
      </div>
    </div>
  )
}

interface EditorComponentProps {
  editor: Editor | null
}

export default function EditorComponent({ editor }: EditorComponentProps) {
  return (
    <div className="border">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="py-5 px-2" />
    </div>
  )
}
