// models/UsersSkills.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const UsersSkills = sequelize.define('UsersSkills', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'users', 
  //     key: 'id'
  //   }
  // },
  // skill_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'skills', 
  //     key: 'id'
  //   }
  // }
}, {
  tableName: 'users_skills'
});

export default UsersSkills;
