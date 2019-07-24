import example from '../src'

describe('example', () => {
  test('should work', async () => {
    const result = await example()
    expect(result).toBe('OK')
  })
})
