const clone = require('./cloneFive')

test('must return the array given', () => {
    expect(clone('one','two','three')).toEqual(['one','two','three'])
})