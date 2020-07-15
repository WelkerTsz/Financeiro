const request = require('supertest');

const app = require('../src/app');
test('Verificando a raiz', () => request(app).get('/')
  .then((res) => {
    expect(res.status).toBe(200);
  }));
