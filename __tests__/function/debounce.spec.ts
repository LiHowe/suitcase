import { debounce } from '../../src/function/debounce'

describe('debounce', () => {
  it('should debounce a function', () => {
    let callCount = 0

    const result: (string|undefined)[] = []
    const debounced = debounce((str: string) => {
      callCount++
      result.push(str)
    }, 32)

    expect(callCount).toEqual(0)
    expect(result).toEqual([])

    debounced('a')
    debounced('b')
    debounced('c')

    setTimeout(() => {
      expect(result).toEqual(['c'])
      expect(callCount).toEqual(1)
    }, 128)
  })
})
