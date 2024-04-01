import supertest from 'supertest';
import { app } from '../app.js';
import Skill  from '../models/Skill.js';
describe('Admin Routes - Skills', () => {
  afterAll(async () => {
    // remove all skills that were created during the tests
    // await Skill.destroy({ where: {} });
  });
  
  it('should create a new skill successfully', async () => {
    const skillData = {
      name: 'Test Skill',
      description: 'Test Description'
    };

    const response = await supertest(app)
      .post('/admin/skills')
      .send(skillData);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Skill');
    expect(response.body.description).toBe('Test Description');
  });

  it('should fail to create a skill with missing name', async () => {
    const skillData = {
      description: 'Test Description'
    };

    const response = await supertest(app)
      .post('/admin/skills')
      .send(skillData);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Skill name can't be empty!");
  });

  it('should get all skills successfully', async () => {
    const response = await supertest(app)
      .get('/admin/skills');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific skill by ID successfully', async () => {
    const skillId = '1';
    
    const response = await supertest(app)
      .get(`/admin/skills/${skillId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(Number(skillId));
  });

  it('should update a skill successfully', async () => {
    const skillId = '1';
    const updatedSkillData = {
      name: 'Updated Skill Name',
      description: 'Updated Description'
    };

    const response = await supertest(app)
      .put(`/admin/skills/${skillId}`)
      .send(updatedSkillData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Skill was updated successfully.');
  });

  it('should delete a skill successfully', async () => {
    const skillId = '1';

    const response = await supertest(app)
      .delete(`/admin/skills/${skillId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Skill was deleted successfully!');
  });
});