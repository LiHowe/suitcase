export function range(start: number, end: number = Infinity, step: number = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (start <= end) {
        const res = { value: start, done: false }
        start += step
        return res
      }
      return { value: undefined, done: true }
    }
  }
}
