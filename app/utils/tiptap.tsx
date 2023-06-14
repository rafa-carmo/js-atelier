import { Node as TiptapNode } from '@tiptap/react'

export const Paragraph = TiptapNode.create({
  name: 'paragraph',
  content: 'inline*',
  group: 'block',

  parseHTML() {
    return [{ tag: 'p' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0]
  },
})

export function renameKeysContentToChildren(data: object) {
  const stringify = JSON.stringify(data)

  let changedString = stringify.replaceAll('"content"', '"children"')
  changedString = changedString.replaceAll('"text": " ', '"text": "')
  const jsonData = JSON.parse(changedString)

  jsonData.map((item: { [key: string]: any }) => {
    if (item.type === 'paragraph') {
      if ('children' in item) {
        if ('text' in item.children) {
          return item
        } else {
          item.children.text = ''
        }
      } else {
        item.children = [
          {
            type: 'text',
            text: '',
          },
        ]
      }
    }
    return item
  })

  return jsonData
}
