import { invokeFnWithCatch } from '../../src/function/invokeFnWithCatch'

describe('invokeFnWithCatch', () => {
  it('should invoke a function with a catch', () => {
    expect(invokeFnWithCatch(() => {
      throw new Error('test')
    }, () => {
      return true
    })).toBe(true)

    expect(invokeFnWithCatch(() => 'howe')).toBe('howe')

    expect(invokeFnWithCatch(() => {
      return new Promise(res => res('howe'))
    }))

  })
})