export function htmlEscape (str: string) {
  const htmlEscapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
  }
  const htmlEscapeRegexp = /[&<>'"]/g
  return str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char])
}