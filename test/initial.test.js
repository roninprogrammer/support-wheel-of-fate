var test = require('tape');

test('should return -1 when the value is not present in Array', (t) => {
  t.equal(-1, [1,2,3].indexOf(4));
  t.end();
});
