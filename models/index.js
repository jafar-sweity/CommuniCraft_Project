import Company from './Company.js';
import Event from './Event.js';
import CompaniesEvents from './CompaniesEvents.js';
import User from './User.js';
import UsersEvents from './UsersEvents.js';
import Skill from './Skill.js';
import UsersSkills from './UsersSkills.js';

Company.belongsToMany(Event, { through: CompaniesEvents });
Event.belongsToMany(Company, { through: CompaniesEvents });

User.belongsToMany(Event, { through: UsersEvents });
Event.belongsToMany(User, { through: UsersEvents });

User.belongsToMany(Skill, { through: UsersSkills });
Skill.belongsToMany(User, { through: UsersSkills });

export { Company, Event, CompaniesEvents, User, UsersEvents, Skill, UsersSkills };
