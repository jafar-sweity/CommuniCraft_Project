import supertest from 'supertest';
import { app } from '../app.js';
describe('Admin Routes - Events', () => {
  afterAll(async () => {
    // remove all events that were created during the tests
    // await Event.destroy({ where: {} });
  });
  
  it('should create a new event successfully', async () => {
    const eventData = {
      name: 'Test Event',
      description: 'Test Description',
      date: '2024-04-01',
      location: 'Test Location',
      amount: 50
    };

    const response = await supertest(app)
      .post('/admin/events')
      .send(eventData);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Event');
    expect(response.body.description).toBe('Test Description');
    expect(response.body.location).toBe('Test Location');
    expect(response.body.amount).toBe(50);
  });

  it('should fail to create an event with missing fields', async () => {
    const eventData = {
      description: 'Test Description',
      date: '2024-04-01',
      location: 'Test Location',
      amount: 50
    };

    const response = await supertest(app)
      .post('/admin/events')
      .send(eventData);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("All fields must be filled out!");
  });

  it('should get all events successfully', async () => {
    const response = await supertest(app)
      .get('/admin/events');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific event by ID successfully', async () => {
    const eventId = '1';

    const response = await supertest(app)
      .get(`/admin/events/${eventId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(Number(eventId));
  });

  it('should update an event successfully', async () => {
    const eventId = '1';
    const updatedEventData = {
      name: 'Updated Event Name',
      description: 'Updated Description',
      date: '2024-04-02',
      location: 'Updated Location',
      amount: 100
    };

    const response = await supertest(app)
      .put(`/admin/events/${eventId}`)
      .send(updatedEventData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Event was updated successfully.');
  });

  it('should delete an event successfully', async () => {
    const eventId = '1';

    const response = await supertest(app)
      .delete(`/admin/events/${eventId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Event was deleted successfully!');
  });
});