import { unique, getQueryString } from '@/services/utils/tools'

describe('services/utils/tools', () => {
  test('check unique', () => {
    const arr = [{ a: 1 }, { b: 1 }, { a: 1 }]
    expect(unique(arr)).toHaveLength(2)
  })
  test('check getQueryString', () => {
    const url = 'http://localhost:8080/?mapId=3&type=1'
    expect(getQueryString('mapId', url)).toBe('3')
  })
})
