import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const UsersTools = sequelize.define('UsersTools', {
    users_tools_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
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
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {  
    tableName: 'users_tools',

})
                
export default UsersTools