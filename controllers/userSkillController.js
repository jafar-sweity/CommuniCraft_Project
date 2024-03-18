import UsersSkills from "../models/UsersSkills.js";

const createUserSkillRelation = async (req, res) => {
    try {
      const UserSkillRelation = await UsersSkills.create(req.body);
      res.status(201).send(UserSkillRelation);

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'

      })
    }

};

const getAllUserSkillRelations = async (req, res) => {
    try {
      const UserSkillRelations = await UsersSkills.findAll();
      res.status(200).send(UserSkillRelations);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  //Get Skills for spesific User.
  const  getSkillsForUserByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const skills = await UsersSkills.findAll({
        where: {
          user_id: id
        }
      })
      if (skills.length) {
        res.status(200).send(skills);
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not add any skills yet.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving skills for user with id=' + id
      });
    }
  };
  
  //Get all users with specific skill 
  const  getUsersBySkillId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await UsersSkills.findAll({
        where: {
          skill_id: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send({
          message: `There is no users have skill with id=${id}.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for skill with id=' + id
      });
    }
  };

  const deleteUserSkillRelation = async (req, res) => {
    const{id} = req.params
    try {
      const num = await UsersSkills.destroy({
        where: { 
          id: id 
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
    createUserSkillRelation,
    getAllUserSkillRelations,
    getSkillsForUserByUserId,
    getUsersBySkillId,
    deleteUserSkillRelation
};