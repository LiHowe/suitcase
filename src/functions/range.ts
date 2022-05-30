/**
 * Return an Iterator of given range.
 * @param start 
 * @param end 
 * @param step 
 * @returns 
 */
export function range(start: number, end: number = Infinity, step: number = 1) {
  [start, end] = validExtent(start, end)
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

/**
 * Return an Array of given range.
 * @param start 
 * @param end 
 * @param step 
 * @returns 
 */
export function rangeArray(start: number, end: number, step: number = 1): number[] {
  if (start === end) return [];
  [start, end] = validExtent(start, end)
  const len = Number.isFinite(end) ? Math.round((end - start + 1) / step) : NaN
  if (Number.isNaN(len)) {
    throw new Error('The end must be finite!')
  }
  return Array.from(new Array(len), (_, idx) => idx * step + start)
}


function validExtent(start: number, end: number) {
  if (end < start) {
    console.warn(`Start is smaller than End, auto transposition. start: ${end}, end: ${start}`)
    let temp = start
    start = end
    end = temp
  }
  return [~~start, ~~end]
}

function isValidNumber(num: number) {
  return !Number.isNaN(num) || Number.isFinite(num)
}