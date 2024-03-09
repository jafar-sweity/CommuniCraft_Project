import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const Project = sequelize.define('Project', {
    project_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    discout: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    project_manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        } 
    }

}, {  
    tableName: 'projects',
   // timestamps: false

})

export default Project