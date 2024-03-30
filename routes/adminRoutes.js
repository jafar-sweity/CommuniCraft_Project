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

// CompaniesEvents routes
adminRoutes.post('/company-event-relations', AdminController.adminCreateCompanyEventRelation);
adminRoutes.get('/company-event-relations', AdminController.adminGetAllCompanyEventRelations);
adminRoutes.get('/company-event-relations/events/:id', AdminController.adminGetEventsByCompanyId);
adminRoutes.get('/company-event-relations/companies/:id', AdminController.adminGetCompaniesByEventId);
adminRoutes.delete('/company-event-relations/:id', AdminController.adminDeleteCompanyEventRelation);

// Project-Tool Relation routes
adminRoutes.post('/project-tool-relations', AdminController.adminCreateProjectToolRelation);
adminRoutes.get('/project-tool-relations', AdminController.adminGetAllProjectToolRelations);
adminRoutes.get('/project-tool-relations/projects/:id', AdminController.adminGetProjectsByToolId);
adminRoutes.get('/project-tool-relations/tools/:id', AdminController.adminGetToolsByProjectId);
adminRoutes.delete('/project-tool-relations/:id', AdminController.adminDeleteProjectToolRelation);

// User-Event Relation routes
adminRoutes.post('/user-event-relations', AdminController.adminCreateUserEventRelation);
adminRoutes.get('/user-event-relations', AdminController.adminGetAllUserEventRelations);
adminRoutes.get('/user-event-relations/users/:id', AdminController.adminGetEventsByUserId);
adminRoutes.get('/user-event-relations/events/:id', AdminController.adminGetUsersByEventId);
adminRoutes.delete('/user-event-relations/:id', AdminController.adminDeleteUserEventRelation);

// User-Skill Relation routes
adminRoutes.post('/user-skill-relations', AdminController.adminCreateUserSkillRelation);
adminRoutes.get('/user-skill-relations', AdminController.adminGetAllUserSkillRelations);
adminRoutes.get('/user-skill-relations/users/:id', AdminController.adminGetSkillsForUserByUserId);
adminRoutes.get('/user-skill-relations/skills/:id', AdminController.adminGetUsersBySkillId);
adminRoutes.delete('/user-skill-relations/:id', AdminController.adminDeleteUserSkillRelation);

// User-Tool Relation routes
adminRoutes.post('/user-tool-relations', AdminController.adminCreateUserToolRelation);
adminRoutes.get('/user-tool-relations', AdminController.adminShowSharingTools);
adminRoutes.get('/user-tool-relations/users/:id', AdminController.adminGetToolsForUserByUserId);
adminRoutes.get('/user-tool-relations/tools/:id', AdminController.adminGetUsersByToolId);
adminRoutes.put('/user-tool-relations/:id', AdminController.adminUpdateUserTool);
adminRoutes.delete('/user-tool-relations/:id', AdminController.adminDeleteUserToolRelation);

export default adminRoutes;
