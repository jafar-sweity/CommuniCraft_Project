import UsersTools from "../models/UsersTools.js";
import Tool from "../models/Tool.js";
import logger from "../logger.js";

const createUserToolRelation = async (req, res) => {
    try {
      const UserToolRelation = await UsersTools.create(req.body);
      res.status(201).send(UserToolRelation);
      logger.info(`Create User Tool Relation successfully`)

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'
      })
      logger.error(error.message || 'Some error occurred while creating the Relation.')
    }

};

const showSharingTools = async (req, res) => {
    try {
      const UserToolRelations = await UsersTools.findAll();
      res.status(200).send(UserToolRelations);
      logger.info(`Get All User Tool Relations successfully`)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
      logger.error(error.message || 'Some error occurred while retrieving Relations.')
    }
  };

  //Get Tools for spesific User.
  const  geToolsForUserByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const toolsIds = await UsersTools.findAll({
       // attributes: ["tool_id"],
        where: {UserId: id}
      });
      const toolsNames = await Promise.all(toolsIds.map(async (userTool) =>{
        const toolId = userTool.ToolToolId;
        //get tool name for each id..
        const toolName = await Tool.findByPk( toolId, {
          attributes: ["name"]
        }); 
        return  {name: toolName.name, status:userTool.status };
       }))
  
      if (toolsNames.length) {
        res.status(200).send({toolsNames: toolsNames});
        logger.info(`Get Tools for user with id ${id} successfully`)
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not add any Tools yet.`
        });
        logger.info(`The user with id=${id} has not add any Tools yet.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Tools for user with id=' + id
      });
      logger.error(error.message || 'Error retrieving Tools for user with id=' + id)
    }
  };
  
  //Get all users with specific Tool 
  const  getUsersByToolId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await UsersTools.findAll({
        where: {
          ToolToolId: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
        logger.info(`Get Users by Tool with id ${id} successfully`)
      } else {
        res.status(404).send({
          message: `There is no users have Tool with id=${id}.`
        });
        logger.info(`There is no users have Tool with id=${id}.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for Tool with id=' + id
      });
      logger.error(error.message || 'Error retrieving Users for Tool with id=' + id)
    }
  };

  const updateUserTool = async (req, res) => {
    const{id} = req.params;
    try {
      const num = await UsersTools.update(req.body, {
        where: { ToolToolId: id }
      });
      if (num == 1) {
        res.send({
          message: 'Tool was updated successfully.'
        });
        logger.info(`Relation between user and tool with id ${id} was updated successfully`)
      } else {
        res.send({
          message: `Cannot update Tool with id=${id}. Maybe Tool was not found or req.body is empty!`
        });
        logger.info(`Cannot updated Relation between user and tool with id=${id}. Maybe Tool was not found or req.body is empty!`)
      }
    } catch (error) {
      res.status(500).send({
        message: 'Error updating Tool with id=' + id
      });
      logger.error('Error updating relation between user and tool with id=' + id)
    }
  };

  const deleteUserToolRelation = async (req, res) => {
    const{id} = req.params
    try {
      const num = await UsersTools.destroy({
        where: { 
          users_tools_id: id 
        }
      });
      if (num == 1) {
        res.send({
          message: 'Relation was deleted successfully!'
        });
        logger.info(`Relation with id ${id} was deleted successfully`)
      } else {
        res.send({
          message: `Cannot delete Relation with id=${id}. Maybe Relation was not found!`
        });
        logger.info(`Cannot delete Relation with id=${id}. Maybe Relation was not found!`)
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Relation with id=' + id
      });
      logger.error('Could not delete Relation with id=' + id)
    }
  };

export {
    createUserToolRelation,
    showSharingTools,
    getUsersByToolId,
    geToolsForUserByUserId,
    updateUserTool,
    deleteUserToolRelation
};