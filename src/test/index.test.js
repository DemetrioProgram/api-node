const request = require('supertest');
const server = require('../../index');

describe('Starting tests on api...', () => {

  it('Test route save user', async () => {
    const formData = {
      username: 'username',
      password: 'password'
    }

    const res = await request(server)
    .post('/user/')
    .send(formData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('password');
    expect(res.body).toHaveProperty('created_at');
    expect(res.body).toHaveProperty('updated_at');

  });

  it('Test route update user', async () => {
    const formData = {
      id: "your id",
      username: "username",
      password: "password"
    }

    const res = await request(server)
    .put('/user/')
    .send(formData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('password');
    expect(res.body).toHaveProperty('created_at');
    expect(res.body).toHaveProperty('updated_at');

  });

  it('Test route findById user', async () => {

    const res = await request(server)
    .get('/user/findById')
    .query({ 
      id: "your id",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('password');
    expect(res.body).toHaveProperty('created_at');
    expect(res.body).toHaveProperty('updated_at');

  });

});