import ArrayBufferConverter from '../ArrayBufferConverter';

test('load()', () => {
  const result = ArrayBufferConverter.load('result');
  expect(ArrayBufferConverter.result).toEqual(result);
});

test('toString()', () => {
  const array = ArrayBufferConverter.toString('');
  const dataString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(array).toBe(dataString);
});
