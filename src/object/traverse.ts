import { isObject } from './getType'
interface TraverseOptions {
  onError?: (e: any) => boolean
  deep?: boolean
}

const basicOpts = {
  onError: () => false,
  deep: true
}

// TODO: 遍历对象
/**
 * 遍历对象
 * @param obj 
 * @param handler 
 * @param opts 
 */
export function traverse(
  obj: Object,
  handler: Function,
  opts: TraverseOptions = basicOpts
) {
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
