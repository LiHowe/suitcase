/**
 * 去抖动
 * @param fn 待去抖函数
 * @param wait 等待的毫秒数
 * @param immediate 是否立即触发
 */
export function debounce (
  fn: (...args: any[]) => any,
  wait: number = 0,
  immediate: boolean = false
) {
  let timer: any = null
  return function debounced (...args: any[]) {
    if (timer) clearTimeout(timer)
    if (immediate && !timer) {
      // @ts-ignore
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      // @ts-ignore
      return fn.apply(this, args)
    }, wait)
  }
}
