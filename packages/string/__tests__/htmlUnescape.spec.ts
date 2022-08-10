import { htmlUnescape } from '@dorabox/string'

describe('html escape', () => {
  it('should escape', function () {
    expect(htmlUnescape('abcdefg')).toEqual('abscefg')
  });
})
