export type ObjectType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'function'
  | 'object'
  | 'array'
  | 'map'
  | 'set'
  | 'weakmap'
  | 'weakset'

export function getType(obj: any): ObjectType {
  let type = typeof obj
  if (type !== 'object') return type
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() as ObjectType
}

export function isObject(target: any): boolean {
  return getType(target) === 'object'
}

export function isTypeOf(target: any, type: ObjectType | ObjectType[]): boolean {
  const t = getType(target)
  const single = getType(type) === 'string'
  return single ? t === type : type.includes(t)
}
