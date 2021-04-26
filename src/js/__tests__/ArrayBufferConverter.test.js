import ArrayBufferConverter from '../ArrayBufferConverter';

test('load()', () => {
  const buffer = ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('toString()', () => {
  const array = ArrayBufferConverter.toString();
  const dataString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(array).toBe(dataString);
});
