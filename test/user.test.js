const request = require('supertest');

const app = require('../src/app');

test('Verificando o usuário', () => request(app).get('/users')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('name', 'Teste');
  }));

test('Inclusão de usuário', () => request(app).post('/users')
  .send({ name: 'Teste2', mail: 'teste2@mail.com.br' })
  .then((res) => {
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Teste2');
  }));
