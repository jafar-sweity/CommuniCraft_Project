import UsersTools from "../models/UsersTools.js";

const createUserToolRelation = async (req, res) => {
    try {
      const UserToolRelation = await UsersTools.create(req.body);
      res.status(201).send(UserToolRelation);

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'

      })
    }

};

const getAllUserToolRelations = async (req, res) => {
    try {
      const UserToolRelations = await UsersTools.findAll();
      res.status(200).send(UserToolRelations);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  //Get Tools for spesific User.
  const  geToolsForUserByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const Tools = await UsersTools.findAll({
        where: {
          user_id: id
        }
      })
      if (Tools.length) {
        res.status(200).send(Tools);
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not add any Tools yet.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Tools for user with id=' + id
      });
    }
  };
  
  //Get all users with specific Tool 
  const  getUsersByToolId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await UsersTools.findAll({
        where: {
        tool_id: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send({
          message: `There is no users have Tool with id=${id}.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for Tool with id=' + id
      });
    }
  };

  const updateUserTool = async (req, res) => {
    const{id} = req.params;
    try {
      const num = await UsersTools.update(req.body, {
        where: { tool_id: id }
      });
      if (num == 1) {
        res.send({
          message: 'Tool was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Tool with id=${id}. Maybe Tool was not found or req.body is empty!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Error updating Tool with id=' + id
      });
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
      } else {
        res.send({
          message: `Cannot delete Relation with id=${id}. Maybe Relation was not found!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Relation with id=' + id
      });
    }
  };

export {
    createUserToolRelation,
    getAllUserToolRelations,
    getUsersByToolId,
    geToolsForUserByUserId,
    updateUserTool,
    deleteUserToolRelation
};