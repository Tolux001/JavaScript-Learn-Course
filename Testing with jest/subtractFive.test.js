const subtract = require('./subtractFive');

test('Add two numbers together', ()=>{
    expect(subtract(10)).toBe(5);
    expect(subtract(10)).not.toBe('5');
})