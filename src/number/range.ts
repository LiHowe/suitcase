export function range(start: number, end: number = Infinity, step: number = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (start < end) {
        start += step
        return { value: start, done: false }
      }
      return { value: undefined, done: true }
    }
  }
}