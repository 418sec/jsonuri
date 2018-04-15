/* global describe it beforeEach expect */
const jsonuri = require('../../src/index.js')
describe('insert', () => {
  let arr
  beforeEach(() => {
    arr = [0, 1, 2, 3]
  })

  it('insert default', () => {
    jsonuri.insert(arr, '/1/', 'hello kitty')
    expect(arr).toEqual([0, 1, 'hello kitty', 2, 3])
  })

  it('insert after', () => {
    jsonuri.insert(arr, '/1/', 'hello kitty', 'after')
    expect(arr).toEqual([0, 1, 'hello kitty', 2, 3])
  })

  it('insert before `0`', () => {
    jsonuri.insert(arr, '/0/', 'hello kitty', 'before')
    expect(arr).toEqual(['hello kitty', 0, 1, 2, 3])
  })

  it('insert before `1`', () => {
    jsonuri.insert(arr, '/1/', 'hello kitty', 'before')
    expect(arr).toEqual([0, 'hello kitty', 1, 2, 3])
  })

  it('insert before `2`', () => {
    jsonuri.insert(arr, '/2/', 'hello kitty', 'before')
    expect(arr).toEqual([0, 1, 'hello kitty', 2, 3])
  })

  it('insert before `3`', () => {
    jsonuri.insert(arr, '/3/', 'hello kitty', 'before')
    expect(arr).toEqual([0, 1, 2, 'hello kitty', 3])
  })

  it('insert before `4`', () => {
    jsonuri.insert(arr, '/4/', 'hello kitty', 'before')
    expect(arr).toEqual([0, 1, 2, 3, 'hello kitty'])
  })

  it('insert after `0`', () => {
    jsonuri.insert(arr, '/0/', 'hello kitty', 'after')
    expect(arr).toEqual([0, 'hello kitty', 1, 2, 3])
  })

  it('out of range', () => {
    jsonuri.insert(arr, '/-100/', 'hello kitty', 'after')
    expect(arr).toEqual(['hello kitty', 0, 1, 2, 3])
  })

  it('out of range 2', () => {
    jsonuri.insert(arr, '/-100/', 'hello kitty', 'before')
    expect(arr).toEqual(['hello kitty', 0, 1, 2, 3])
  })

  it('out of range 2', () => {
    jsonuri.insert(arr, '/999/', 'hello kitty', 'before')
    expect(arr).toEqual([0, 1, 2, 3, 'hello kitty'])
  })

  it('out of range 3', () => {
    jsonuri.insert(arr, '/999/', 'hello kitty', 'after')
    expect(arr).toEqual([0, 1, 2, 3, 'hello kitty'])
  })

  it('out of range', () => {
    jsonuri.insert(arr, '/999/', 'hello kitty')
    expect(arr).toEqual([0, 1, 2, 3, 'hello kitty'])
  })
})
