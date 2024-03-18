import {getUserById, updateUser} from './userController.js'
import {getAllProjects, getProjectById} from './projectController.js'
import {getTasksByUserId, getTaskById} from './taskController.js'
import {getAllSkills, createSkill} from './skillController.js'
import {createUserSkillRelation, getSkillsForUserByUserId, deleteUserSkillRelation} from './userSkillController.js'
import {createTool, getAllTools} from './toolController.js'
import {createUserToolRelation, updateUserTool, geToolsForUserByUserId, deleteUserToolRelation} from './userToolController.js'
import {getAllEvents, getEventById} from './eventController.js'
import {createUserEventRelation, getEventsByUserId, deleteUserEventRelation} from './userEventController.js'

// Show my profile.
const getMyProfile = (req, res) => {
  //req.params.id = req.params.id;
  getUserById(req, res);
};

// Update my profile.
const updateMyProfile = (req, res) => {
  updateUser(req, res);
}

// Show all projects.
const showAllProjects = (req, res) => {
   getAllProjects(req, res);
}

// Show specific project
const showProject = (req, res) => {
  getProjectById(req, res);
}
// Show my tasks
const showMyTasks = (req, res) => {
   getTasksByUserId(req, res);
}

// Show specific Task 
const showTask = (req, res) => {
  getTaskById(req, res);
}

// Show all skills
const showAllSkills = (req, res) => {
  getAllSkills(req, res);
}

// Show my skills
const getMySkills = (req, res) => {
  getSkillsForUserByUserId(req,res)
}

// Add availabile skill to my profile (add to user_skill relation table)
const addAvailabilSkill = (req, res) => {
  createUserSkillRelation(req, res);
}

// Add new skill to skill table 
const addNewSkill = (req, res) => {
  createSkill(req, res);
}

// Delete skill from my profile (delete user_skill relation)
const deleteSkill = (req, res) => {
  deleteUserSkillRelation(req, res);
}


// Show all tools
const getTools = (req, res)=> {
  getAllTools(req, res);
}

// Show my tools (from user_tool relation)
const getMyTools = (req, res)=> {
  geToolsForUserByUserId(req, res);
}

// Add tool to my profile (user_tool relation)
const addTool = (req, res) => {
  createUserToolRelation(req, res);
}

// Add new tool to tool table
const addNewTool = (req, res) => {
  createTool(req, res);
}

// Update tool ( in user_tool relation)
const updateTool = (req, res) => {
  updateUserTool(req, res);
}

// Delete tool from my profile (user-tool relation)
const deleteTool = (req, res) => {
  deleteUserToolRelation(req, res);
}

// Show All events
const getAllEvent = (req, res) => {
  getAllEvents(req, res);
}

// Show specific event 
const ShowEvent = (req, res) => {
  getEventById(req,res);
}
// Show all event im registered in (user-event relatiom)
const showMyEvents = (req, res) => {
  getEventsByUserId(req, res)
}

// Register in specific event (user_event relation)
const registerInEvent = (req, res) => {
  createUserEventRelation(req, res);
}

// Delete register in specfic event (delete user-event relation )
const deleteRegister = (req, res) => {
  deleteUserEventRelation(req, res);
}
export { deleteRegister,registerInEvent, showMyEvents, ShowEvent, getAllEvent, deleteTool, updateTool,
  addNewTool, addTool, getMyTools, getTools, deleteSkill, addNewSkill, addAvailabilSkill, getMySkills, 
  showAllSkills, showTask, showMyTasks, showProject, showAllProjects, updateMyProfile, getMyProfile  };
