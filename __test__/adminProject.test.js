import supertest from 'supertest';
import { app } from '../app.js';
import Project from '../models/Project.js';

describe('Admin Routes - Projects', () => {
  afterAll(async () => {
    // remove all projects that were created during the tests
    await Project.destroy({ where: {
      name: 'Test Project'
    } });

  });
  
  it('should create a new project successfully', async () => {
    const projectData = {
      name: 'Test Project',
      description: 'Test Description',
      cost: 1000,
      discount: 100,
      status: 'In Progress',
      owner: 'Test Owner',
      end_date: '2024-12-31',
      project_manager_id: 'manager_id'
    };

    const response = await supertest(app)
      .post('/admin/projects')
      .send(projectData);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Project');
    expect(response.body.description).toBe('Test Description');
  });

  it('should get all projects successfully', async () => {
    const response = await supertest(app)
      .get('/admin/projects');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific project by ID successfully', async () => {
    const projectId = '1';

    const response = await supertest(app)
      .get(`/admin/projects/${projectId}`);

    expect(response.status).toBe(200);
    expect(response.body.project_id).toBe(Number(projectId));
  });

  it('should update a project successfully', async () => {
    const projectId = '1';
    const updatedProjectData = {
      name: 'Updated Project Name',
      description: 'Updated Description',
    };

    const response = await supertest(app)
      .put(`/admin/projects/${projectId}`)
      .send(updatedProjectData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Project was updated successfully.');
  });

  it('should delete a project successfully', async () => {
    const projectId = '1';

    const response = await supertest(app)
      .delete(`/admin/projects/${projectId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Project was deleted successfully!');
  });
});