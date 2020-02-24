const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbConfig');

// beforeEach(() => db("users").truncate());

describe('authentication', () => {
  it('registers a user', async () => {
    const res = await request(server)
      .post('/api/register')
      .send({
        email: 'dinerss4s5@rasha.fastmail.com',
        password: '123456',
        role: 'diner'
      });
    expect(res.status).toBe(201);
  });

  it('logs in registered user', async () => {
    const res = await request(server)
      .post('/api/login')
      .send({ email: 'maxy@max.org', password: '123456' });
    expect(res.status).toBe(200);
  });
});
