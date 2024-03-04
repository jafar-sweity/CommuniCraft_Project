import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const CompaniesEvents = sequelize.define('CompaniesEvents', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  company_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'companies',
      key: 'id',
    },
  },
  event_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'events',
      key: 'id',
    },
  },
}, {
  tableName: 'companies_events',
});

export default CompaniesEvents;
