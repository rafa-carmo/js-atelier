import { Node, mergeAttributes, textblockTypeInputRule } from '@tiptap/react'

export const InstagramBlock = Node.create({
  name: 'instagram',
  content: 'text*',
  group: 'block',
  atom: true,

  addInputRules() {
    return [
      textblockTypeInputRule({
        find: /\\instagram/,
        type: this.type,
      }),
    ]
  },

  parseHTML() {
    return [
      {
        tag: 'instagram-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['instagram-block', mergeAttributes(HTMLAttributes)]
  },
})
