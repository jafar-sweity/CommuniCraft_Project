import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const Tool = sequelize.define('Tool', {
    tool_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

}, {  
    tableName: 'tools',
    

})

export default Tool