import supertest from 'supertest';
import {app} from '../app.js';

describe('Authentication Routes', () => {

  describe('Signup', () => {
  it('should signup a new user successfully', async () => {

    const userData = {
      name: 'shahd',
      role: 'user',
      status: 'active',
      email: 'shahd22@gmail.com',
      mobile_number: '11234567890',
      password: 'password123',
      profile_picture_url: 'https://example.com/profile.jpg',
      bio: 'I am a software engineer',
      salary: 10000
    };

    const response = await supertest(app)
      .post('/auth/signup')
      .send(userData);
      
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeTruthy();
  });
  
  it ('should fail signup with existing email', async () => {
    const userData = {
      name: 'farah',
      role: 'user',
      status: 'active',
      email: 'farah@gmail.com',
      mobile_number: '0593912123',
      password: 'password123',
      profile_picture_url: 'https://example.com/profile.jpg',
      bio: 'I am a web developer',
      salary: 10000
    };
    const response = await supertest(app)
      .post('/auth/signup')
      .send(userData);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe('User email already exists');
  } );

  it ('should fail signup with missing name', async () => {
    const userData = {
      role: 'user',
      status: 'active',
      email: 'jafar@gmail.com',
      mobile_number: '0593912123',
      password: 'password123',
      profile_picture_url: 'https://example.com/profile.jpg',
      bio: 'I am a web developer',
      salary: 10000
    };
    const response = await supertest(app)
      .post('/auth/signup')
      .send(userData);
    
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe('Name is required');
  });
});

describe('Login', () => {
  it('should login a user successfully', async () => {
    const userData = {
      email: 'ahmad@gmail.com',
      password: 'password123'
    };
    const response = await supertest(app)
      .post('/auth/login')
      .send(userData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeTruthy();
  }
  );
  it('should fail login with non-existing email', async () => {
    const userData = {
      email: 'jafar_21@gmail.com',
      password: 'password123'
    };
    const response = await supertest(app)
      .post('/auth/login')
      .send(userData);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe('User does not exist');
  } );

  it('should fail login with wrong password', async () => {
    const userData = {
      email: 'jafar@gmail.com',
      password: 'password1234'
    };
    const response = await supertest(app)
      .post('/auth/login')
      .send(userData);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe('Invalid password');
  }
  );
} );


});
