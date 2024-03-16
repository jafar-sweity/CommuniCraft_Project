import * as CompanyController from './companyController.js';
import * as EventController from './eventController.js';
import * as SkillController from './skillController.js';
import * as ProjectController from './projectController.js';
import * as ToolController from './toolController.js';
import * as UserController from './userController.js';

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
  adminDeleteUser
};
