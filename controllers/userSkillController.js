import UsersSkills from "../models/UsersSkills.js";
import Skill from "../models/Skill.js";
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
      const skillsIds = await UsersSkills.findAll({
        attributes: ["SkillId"],
         where: {UserId: id}   
      });
      const skillsNames = await Promise.all(skillsIds.map(async (userSkill) =>{
        const skillId = userSkill.SkillId;
        //get skill name for each id..
        console.log(skillId+"///////////");
        const skillName = await Skill.findByPk( skillId, {
          attributes: ["name", "description"]
        }); 
        return  skillName;
       }))
    
      if (skillsNames.length) {
        res.status(200).send({skillsNams: skillsNames});
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
          SkillId: id
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
    deleteUserSkillRelation,
    
};