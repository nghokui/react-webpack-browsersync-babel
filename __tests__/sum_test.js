jest.unmock('../app/js/sum');

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    const sum = require('../app/js/sum');
    expect(sum(1, 2)).toBe(3);
  });
});
