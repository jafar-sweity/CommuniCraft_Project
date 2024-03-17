import express from "express";
import * as AdminController from '../controllers/adminController.js';

const adminRoutes = express.Router();

// Company routes
adminRoutes.post('/companies', AdminController.adminCreateCompany);
adminRoutes.get('/companies', AdminController.adminGetAllCompanies);
adminRoutes.get('/companies/:id', AdminController.adminGetCompanyById);
adminRoutes.put('/companies/:id', AdminController.adminUpdateCompany);
adminRoutes.delete('/companies/:id', AdminController.adminDeleteCompany);

// Event routes
adminRoutes.post('/events', AdminController.adminCreateEvent);
adminRoutes.get('/events', AdminController.adminGetAllEvents);
adminRoutes.get('/events/:id', AdminController.adminGetEventById);
adminRoutes.put('/events/:id', AdminController.adminUpdateEvent);
adminRoutes.delete('/events/:id', AdminController.adminDeleteEvent);

// Skill routes
adminRoutes.post('/skills', AdminController.adminCreateSkill);
adminRoutes.get('/skills', AdminController.adminGetAllSkills);
adminRoutes.get('/skills/:id', AdminController.adminGetSkillById);
adminRoutes.put('/skills/:id', AdminController.adminUpdateSkill);
adminRoutes.delete('/skills/:id', AdminController.adminDeleteSkill);

// Project routes
adminRoutes.post('/projects', AdminController.adminCreateProject);
adminRoutes.get('/projects', AdminController.adminGetAllProjects);
adminRoutes.get('/projects/:id', AdminController.adminGetProjectById); 
adminRoutes.put('/projects/:id', AdminController.adminUpdateProject); 
adminRoutes.delete('/projects/:id', AdminController.adminDeleteProject); 

// Tool routes
adminRoutes.post('/tools', AdminController.adminCreateTool);
adminRoutes.get('/tools', AdminController.adminGetAllTools);
adminRoutes.get('/tools/:id', AdminController.adminGetToolById);
adminRoutes.put('/tools/:id', AdminController.adminUpdateTool);
adminRoutes.delete('/tools/:id', AdminController.adminDeleteTool);

// User routes
adminRoutes.post('/users', AdminController.adminCreateUser);
adminRoutes.get('/users', AdminController.adminGetAllUsers);
adminRoutes.get('/users/:id', AdminController.adminGetUserById);
adminRoutes.put('/users/:id', AdminController.adminUpdateUser);
adminRoutes.delete('/users/:id', AdminController.adminDeleteUser);

export default adminRoutes;
