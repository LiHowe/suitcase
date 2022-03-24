export default function htmlUnescape (str: string){
  const htmlUnescapeMap: Record<string, string> = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
  }
  const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
  return str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char])
}