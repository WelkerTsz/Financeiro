const request = require('supertest');

const app = require('../src/app');
test('Respondendo na raiz do app', () => request(app).get('/')
  .then((res) => {
    expect(res.status).toBe(200);
  }));
