import supertest from 'supertest';
import { app } from '../app.js';


describe('Admin Routes - Tools', () => {
  afterAll(async () => {
    // remove all tools that were created during the tests
    // await Tool.destroy({ where: {} });
  });
  
  it('should create a new tool successfully', async () => {
    const toolData = {
      name: 'Test Tool',
      price: 50
    };

    const response = await supertest(app)
      .post('/admin/tools')
      .send(toolData);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Tool');
    expect(response.body.price).toBe(50);
  });

  it('should get all tools successfully', async () => {
    const response = await supertest(app)
      .get('/admin/tools');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific tool by ID successfully', async () => {
    const toolId = '1';

    const response = await supertest(app)
      .get(`/admin/tools/${toolId}`);

    expect(response.status).toBe(200);
    expect(response.body.tool_id).toBe(Number(toolId));
  });

  it('should update a tool successfully', async () => {
    const toolId = '1';
    const updatedToolData = {
      name: 'Updated Tool Name',
      price: 75,
    };

    const response = await supertest(app)
      .put(`/admin/tools/${toolId}`)
      .send(updatedToolData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tool was updated successfully.');
  });

  it('should delete a tool successfully', async () => {
    const toolId = '1';

    const response = await supertest(app)
      .delete(`/admin/tools/${toolId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tool was deleted successfully!');
  });
});
