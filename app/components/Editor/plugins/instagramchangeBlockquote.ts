export const escapeMap: { [key: string]: string } = {
  '&lt;blockquote': '<blockquote',
}

export function changeBlockquote(html: string) {
  let content = html
  const keys = Object.keys(escapeMap)

  for (let i = 0; i <= keys.length; i++) {
    content = content.replaceAll(escapeMap[keys[i]], keys[i])
  }
  return content
}
