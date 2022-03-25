export function getType (obj: any) {
  let type = typeof obj
	if (type !== 'object') return type
	return Object.prototype.toString.call(obj).slice(8, -1)
}