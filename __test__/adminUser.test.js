import User from '../models/User.js';
import supertest from 'supertest';
import app from 'your/app'; // Import your Express app instance

describe('Admin Routes - Users', () => {

  afterAll(async () => {
    // remove all users that were created during the tests 
    await User.destroy({ where: {
      email: 'jafar@gmail.com'
    } });
  });

  it('should create a new user successfully', async () => {
    const userData = {
      name: 'Jafar',
      email: 'jafar@gmail.com',
      password: 'password1234'
    };

    const response = await supertest(app)
      .post('/admin/users')
      .send(userData);

    expect(response.status).toBe(201);
    // Add assertions for the response body as needed
  });

  it('should return 400 if email or password is missing during user creation', async () => {
    const userData = {
      name: 'Ahmad',
      // Missing email or password
      password: 'password1234'
    };

    const response = await supertest(app)
      .post('/admin/users')
      .send(userData);

    expect(response.status).toBe(400);
    // Add assertions for the error message in the response body
  });

  it('should return 400 if user with the same email already exists', async () => {
    // Assuming you have a pre-existing user in your test database
    const existingUser = await User.findOne({ where: { email: 'farah@gmail.com' } });

    const userData = {
      name: 'Farah',
      email: 'farah@gmail.com',
      password: 'password1234'
    };

    const response = await supertest(app)
      .post('/admin/users')
      .send(userData);

    expect(response.status).toBe(400);
    // Add assertions for the error message in the response body
  });

  it('should return 400 if email is invalid during user creation', async () => {
    const userData = {
      name: 'Shahd',
      email: 'invalidemail',
      password: 'password1234'
    };

    const response = await supertest(app)
      .post('/admin/users')
      .send(userData);

    expect(response.status).toBe(400);
    // Add assertions for the error message in the response body
  });

  it('should return 400 if password is less than 6 characters during user creation', async () => {
    const userData = {
      name: 'Farah',
      email: 'farah@gmail.com',
      password: '12345' // Password less than 6 characters
    };

    const response = await supertest(app)
      .post('/admin/users')
      .send(userData);

    expect(response.status).toBe(400);
    // Add assertions for the error message in the response body
  });

  it('should get all users successfully', async () => {
    const response = await supertest(app)
      .get('/admin/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Assuming you have at least one user in the database
  it('should get a specific user by ID successfully', async () => {
    // Assuming you have a valid user ID in your database
    const userId = '1';

    const response = await supertest(app)
      .get(`/admin/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
  });

  // Assuming you have at least one user in the database
  it('should update a user successfully', async () => {
    // Assuming you have a valid user ID in your database
    const userId = '1';
    const updatedUserData = {
      // Provide updated user data
    };

    const response = await supertest(app)
      .put(`/admin/users/${userId}`)
      .send(updatedUserData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('User was updated successfully.');
  });

  // Assuming you have at least one user in the database
  it('should delete a user successfully', async () => {
    // Assuming you have a valid user ID in your database
    const userId = '1';

    const response = await supertest(app)
      .delete(`/admin/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('User was deleted successfully!');
  });
});
