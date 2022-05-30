import { range, rangeArray } from '../../src/functions'

describe('range', () => {
  it('for...of', () => {
    const arr = []
    for (const i of range(0, 5)) {
      arr.push(i)
    }
    expect(arr).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('for...of reverse start & end', () => {
    const arr = []
    for (const i of range(5, 0)) {
      arr.push(i)
    }
    expect(arr).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('for...in', () => {
    const arr = []
    for (const i in range(5, 10)) {
      arr.push(i)
    }
    expect(arr).toEqual([0,1,2,3,4,5])
  })
})


describe('rangeArray', () => {
  it('error usage case', () => {
    expect(rangeArray(5, Infinity)).toThrowError('The end must be finite!')
    expect(rangeArray(5, NaN)).toThrowError('The end must be finite!')
  })

  it('should reuturn an array', () => {
    expect(rangeArray(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
    expect(rangeArray(5, 10)).toEqual([5, 6, 7, 8, 9, 10])
    expect(rangeArray(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10])
    expect(rangeArray(0, 10, 3)).toEqual([0, 3, 6, 9])
  })

  it('reverse start and end', () => {
    expect(rangeArray(5, 0)).toEqual([0, 1, 2, 3, 4, 5])
    expect(rangeArray(10, 5)).toEqual([5, 6, 7, 8, 9, 10])
    expect(rangeArray(10, 0, 2)).toEqual([0, 2, 4, 6, 8, 10])
    expect(rangeArray(10, 0, 3)).toEqual([0, 3, 6, 9])
  })

  it('accept float', () => {
    expect(rangeArray(0, 5.5)).toEqual([0, 1, 2, 3, 4, 5])
    expect(rangeArray(5.5, 10.9)).toEqual([5, 6, 7, 8, 9, 10])
  })
})