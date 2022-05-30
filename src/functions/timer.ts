/**
 * accurate timer
 * @param fn 
 * @param delay execution time interval
 * @returns cancel function
 */
export function timer(fn: () => any, delay: number) {
  let counter = 1
  let start = Date.now()
  let t: NodeJS.Timeout

  function handler() {
    const ideal = counter * delay
    const real = Date.now() - start
    const offset = real - ideal
    counter++
    fn()
    // calibration
    t = setTimeout(handler, delay - offset)
  }
  t = setTimeout(handler, delay);
  return {
    cancel: () => clearTimeout(t)
  }
}