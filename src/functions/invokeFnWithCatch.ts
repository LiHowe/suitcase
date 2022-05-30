/**
 * 使用 try...catch 包裹调用方法
 * @param fn any function
 * @param onError error handler
 * @returns 
 */
export function invokeFnWithCatch<T>(
  fn: (...args: any) => T,
  onError?: (error: any) => void
  ): T | void {
    try {
      return fn()
    } catch (e) {
      return (onError && onError(e))
    }
  }