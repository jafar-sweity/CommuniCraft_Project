import * as CompanyController from './companyController.js';
import * as EventController from './eventController.js';
import * as SkillController from './skillController.js';
import * as ProjectController from './projectController.js';
import * as ToolController from './toolController.js';
import * as UserController from './userController.js';
import * as CompaniesEventController from './companiesEventController.js';
import * as ProjectsToolsController from './projectsToolsController.js';
import * as UsersEventsController from './userEventController.js';
import * as UsersSkillsController from './userSkillController.js';
import * as UsersToolsController from './userToolController.js';

//company
const adminCreateCompany = (req, res) => {
  CompanyController.createCompany(req, res);
};

const adminGetAllCompanies = (req, res) => {
  CompanyController.getAllCompanies(req, res);
};

const adminGetCompanyById = (req, res) => {
  CompanyController.getCompanyById(req, res);
};

const adminUpdateCompany = (req, res) => {
  CompanyController.updateCompany(req, res);
};

const adminDeleteCompany = (req, res) => {
  CompanyController.deleteCompany(req, res);
};

//event
const adminCreateEvent = (req, res) => {
  EventController.createEvent(req, res);
};

const adminGetAllEvents = (req, res) => {
  EventController.getAllEvents(req, res);
};

const adminGetEventById = (req, res) => {
  EventController.getEventById(req, res);
};

const adminUpdateEvent = (req, res) => {
  EventController.updateEvent(req, res);
};

const adminDeleteEvent = (req, res) => {
  EventController.deleteEvent(req, res);
};

//skill
const adminCreateSkill = (req, res) => {
  SkillController.createSkill(req, res);
};

const adminGetAllSkills = (req, res) => {
  SkillController.getAllSkills(req, res);
};

const adminGetSkillById = (req, res) => {
  SkillController.getSkillById(req, res);
};

const adminUpdateSkill = (req, res) => {
  SkillController.updateSkill(req, res);
};

const adminDeleteSkill = (req, res) => {
  SkillController.deleteSkill(req, res);
};


//project
const adminCreateProject = (req, res) => {
  ProjectController.createProject(req, res);
};

const adminGetAllProjects = (req, res) => {
  ProjectController.getAllProjects(req, res);
};

const adminGetProjectById = (req, res) => {
  req.params.project_id = req.params.id;
  ProjectController.getProjectById(req, res);
};

const adminUpdateProject = (req, res) => {
  req.params.project_id = req.params.id;
  ProjectController.updateProject(req, res);
};

const adminDeleteProject = (req, res) => {
  req.params.project_id = req.params.id; 
  ProjectController.deleteProject(req, res);
};

//tool
const adminCreateTool = (req, res) => {
  ToolController.createTool(req, res);
};

const adminGetAllTools = (req, res) => {
  ToolController.getAllTools(req, res);
};

const adminGetToolById = (req, res) => {
  req.params.id = req.params.id;
  ToolController.getToolById(req, res);
};

const adminUpdateTool = (req, res) => {
  req.params.id = req.params.id;
  ToolController.updateTool(req, res);
};

const adminDeleteTool = (req, res) => {
  req.params.id = req.params.id;
  ToolController.deleteTool(req, res);
};

//user
const adminCreateUser = (req, res) => {
  UserController.createUser(req, res);
};

const adminGetAllUsers = (req, res) => {
  UserController.getAllUsers(req, res);
};

const adminGetUserById = (req, res) => {
  UserController.getUserById(req, res);
};

const adminUpdateUser = (req, res) => {
  UserController.updateUser(req, res);
};

const adminDeleteUser = (req, res) => {
  UserController.deleteUser(req, res);
};

// CompaniesEvents
const adminCreateCompanyEventRelation = (req, res) => {
  CompaniesEventController.createCompanyEventRelation(req, res);
};

const adminGetAllCompanyEventRelations = (req, res) => {
  CompaniesEventController.getAllCompanyEventRelations(req, res);
};

const adminGetEventsByCompanyId = (req, res) => {
  CompaniesEventController.getEventsByCompanyId(req, res);
};

const adminGetCompaniesByEventId = (req, res) => {
  CompaniesEventController.getCompniesByEventId(req, res); 
};

const adminDeleteCompanyEventRelation = (req, res) => {
  CompaniesEventController.deleteCompanyEventRelation(req, res);
};

// ProjectsTools
const adminCreateProjectToolRelation = (req, res) => {
  ProjectsToolsController.createProjectToolRelation(req, res);
};

const adminGetAllProjectToolRelations = (req, res) => {
  ProjectsToolsController.getAllProjectToolRelations(req, res);
};

const adminGetProjectsByToolId = (req, res) => {
  ProjectsToolsController.getProjectsByToolId(req, res);
};

const adminGetToolsByProjectId = (req, res) => {
  ProjectsToolsController.getToolsByProjectId(req, res);
};

const adminDeleteProjectToolRelation = (req, res) => {
  ProjectsToolsController.deleteProjectToolRelation(req, res);
};

// UsersEvents
const adminCreateUserEventRelation = (req, res) => {
  UsersEventsController.createUserEventRelation(req, res);
};

const adminGetAllUserEventRelations = (req, res) => {
  UsersEventsController.getAllUserEventRelations(req, res);
};

const adminGetEventsByUserId = (req, res) => {
  UsersEventsController.getEventsByUserId(req, res);
};

const adminGetUsersByEventId = (req, res) => {
  UsersEventsController.getUsersByEventId(req, res);
};

const adminDeleteUserEventRelation = (req, res) => {
  UsersEventsController.deleteUserEventRelation(req, res);
};

// UsersSkills operations
const adminCreateUserSkillRelation = (req, res) => {
  UsersSkillsController.createUserSkillRelation(req, res);
};

const adminGetAllUserSkillRelations = (req, res) => {
  UsersSkillsController.getAllUserSkillRelations(req, res);
};

const adminGetSkillsForUserByUserId = (req, res) => {
  UsersSkillsController.getSkillsForUserByUserId(req, res);
};

const adminGetUsersBySkillId = (req, res) => {
  UsersSkillsController.getUsersBySkillId(req, res);
};

const adminDeleteUserSkillRelation = (req, res) => {
  UsersSkillsController.deleteUserSkillRelation(req, res);
};

// UsersTools operations
const adminCreateUserToolRelation = (req, res) => {
  UsersToolsController.createUserToolRelation(req, res);
};

const adminShowSharingTools = (req, res) => {
  UsersToolsController.showSharingTools(req, res);
};

const adminGetToolsForUserByUserId = (req, res) => {
  UsersToolsController.geToolsForUserByUserId(req, res);
};

const adminGetUsersByToolId = (req, res) => {
  UsersToolsController.getUsersByToolId(req, res);
};

const adminUpdateUserTool = (req, res) => {
  UsersToolsController.updateUserTool(req, res);
};

const adminDeleteUserToolRelation = (req, res) => {
  UsersToolsController.deleteUserToolRelation(req, res);
};

export {
  adminCreateCompany,
  adminGetAllCompanies,
  adminGetCompanyById,
  adminUpdateCompany,
  adminDeleteCompany,

  adminCreateEvent,
  adminGetAllEvents,
  adminGetEventById,
  adminUpdateEvent,
  adminDeleteEvent,

  adminCreateSkill,
  adminGetAllSkills,
  adminGetSkillById,
  adminUpdateSkill,
  adminDeleteSkill,

  adminCreateProject,
  adminGetAllProjects,
  adminGetProjectById,
  adminUpdateProject,
  adminDeleteProject,

  adminCreateTool,
  adminGetAllTools,
  adminGetToolById,
  adminUpdateTool,
  adminDeleteTool,

  adminCreateUser,
  adminGetAllUsers,
  adminGetUserById,
  adminUpdateUser,
  adminDeleteUser,

  adminCreateCompanyEventRelation,
  adminGetAllCompanyEventRelations,
  adminGetEventsByCompanyId,
  adminGetCompaniesByEventId,
  adminDeleteCompanyEventRelation,

  adminCreateProjectToolRelation,
  adminGetAllProjectToolRelations,
  adminGetProjectsByToolId,
  adminGetToolsByProjectId,
  adminDeleteProjectToolRelation,

  adminCreateUserEventRelation,
  adminGetAllUserEventRelations,
  adminGetEventsByUserId,
  adminGetUsersByEventId,
  adminDeleteUserEventRelation,

  adminCreateUserSkillRelation,
  adminGetAllUserSkillRelations,
  adminGetSkillsForUserByUserId,
  adminGetUsersBySkillId,
  adminDeleteUserSkillRelation,

  adminCreateUserToolRelation,
  adminShowSharingTools,
  adminGetToolsForUserByUserId,
  adminGetUsersByToolId,
  adminUpdateUserTool,
  adminDeleteUserToolRelation,
};
