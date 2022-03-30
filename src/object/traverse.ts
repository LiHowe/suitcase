import { isObject } from './getType'
interface TraverseOptions {
  onError: (e: any) => boolean
  deep: boolean
}
export function traverse(obj: Object, handler: Function, opts?: TraverseOptions) {
  const { onError, deep } = opts
  for (const [key, value] of Object.entries(obj)) {
    try {
      if (deep && isObject(value)) {
        traverse(obj, handler)
      }
        handler(key, value)
    } catch (e: any) {
      onError && onError(e)

    }
  }
}
