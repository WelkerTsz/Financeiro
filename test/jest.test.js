test('Test Jest', () => {
  const number = null;
  // expect(number).not.toBeNull();
  expect(number).toBeNull();
});

test('trabalhando com objetos', () => {
  const obj = {	name: 'teste', mail: 'teste@mail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'teste');
// const obj2 = {	name: 'teste', mail: 'teste@mail.com' };
//expect(obj).toEqual(obj);
});
