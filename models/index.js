import sequelize from '../config/sequelize.js';
import User from './User.js'; 
import Company from './Company.js';
import Event from './Event.js';
import Skill from './Skill.js';
import Project from './Project.js'; 
import Task from './Task.js';
import Tool from './Tool.js'; 

import CompaniesEvents from './CompaniesEvents.js';
import UsersEvents from './UsersEvents.js';
import UsersSkills from './UsersSkills.js';
import ProjectsTools from './ProjectsTools.js';
import UsersTools from './UsersTools.js';   

Company.belongsToMany(Event, { through: CompaniesEvents });
Event.belongsToMany(Company, { through: CompaniesEvents });

User.belongsToMany(Event, { through: UsersEvents });
Event.belongsToMany(User, { through: UsersEvents });

User.belongsToMany(Skill, { through: UsersSkills });
Skill.belongsToMany(User, { through: UsersSkills });


Project.belongsToMany(Tool, {through: ProjectsTools});
Tool.belongsToMany(Project, {through: ProjectsTools});

User.belongsToMany(Tool, {through: UsersTools});
Tool.belongsToMany(User, {through: UsersTools});

Project.belongsToMany(User, {through: Task});
User.belongsToMany(Project, {through: Task});

User.hasOne(Project, { foreignKey: 'project_manager_id' });
Project.belongsTo(User, { foreignKey: 'project_manager_id', as: 'ProjectManager' });



export { Company, Event, CompaniesEvents, User, UsersEvents, Skill, UsersSkills, Project,Tool, Task, ProjectsTools, UsersTools };