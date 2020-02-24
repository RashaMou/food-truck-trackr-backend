const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbConfig');

beforeEach(() => db.seed.run());

// describe('trucks', () => {
//   it("get all user's trucks", async () => {
//     const res = await request(server).get('/api/trucks/operators/3');
//     expect(res.status).toEqual(200);
//   });
// });
