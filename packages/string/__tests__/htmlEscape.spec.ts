import { htmlEscape } from '@dorabox/string'

describe('html escape', () => {
  it('should escape', function () {
    expect(htmlEscape('abcdefg')).toEqual('abscefg')
  });
})
