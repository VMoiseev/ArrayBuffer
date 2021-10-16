import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Метод load может загружать данные, а метод toString переводит содержимое загруженного в строку', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  arrayBuffer.load(getBuffer());
  const text = arrayBuffer.toString();
  expect(data).toBe(text);
});
