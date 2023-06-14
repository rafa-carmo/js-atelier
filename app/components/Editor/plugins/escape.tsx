export const escapeMap: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeChange(html: string) {
  let content = html
  const keys = Object.keys(escapeMap)

  for (let i = 0; i <= keys.length; i++) {
    content = content.replaceAll(escapeMap[keys[i]], keys[i])
  }
  return content
}
