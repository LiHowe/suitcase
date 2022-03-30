interface CompareOptions {
  // 仅显示不同
  diffOnly?: boolean
  // 是否检查私有key
  privateKey?: boolean
  // 仅检查根
  shallow?: boolean
}
export function compare(
  o1: Object,
  o2: Object,
  options?: CompareOptions
) {
  const { diffOnly, privateKey, shallow } = options



  return true
}
