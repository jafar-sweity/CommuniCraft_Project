import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const UsersEvents = sequelize.define('UsersEvents', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // event_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'events', 
  //     key: 'id',
  //   },
  // },
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'users',
  //     key: 'id',
  //   },
  // },
}, {
  tableName: 'users_events',
});

export default UsersEvents;
