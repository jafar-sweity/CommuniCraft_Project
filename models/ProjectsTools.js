import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const ProjectsTools = sequelize.define('ProjectsTools', {
    project_tools_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'projects',
            key: 'project_id'
        } 
    },
    tool_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tools',
            key: 'tool_id'
        } 
    },

}, {  
    tableName: 'projects_Tools',
   
})

export default ProjectsTools