import sample from '../src'

describe('sample', () => {
  test('should work', async () => {
    const result = await sample()
    expect(result).toBe('OK')
  })
})
