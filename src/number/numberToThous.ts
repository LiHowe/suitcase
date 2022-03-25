export function numberToThous (num: number | string) {
  return Number(num).toLocaleString('en-us')
}