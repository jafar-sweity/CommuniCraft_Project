import User from "../models/User.js";
import UsersEvents from "../models/UsersEvents.js";

const createCUserEventRelation = async (req, res) => {
    try {
      const UserEventRelation = await UsersEvents.create(req.body);
      res.status(201).send(UserEventRelation);

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'

      })
    }

};

const getAllUserEventRelations = async (req, res) => {
    try {
      const UserEventRelation = await UsersEvents.findAll();
      res.status(200).send(UserEventRelation);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  const  getUserEventRelationById = async (req, res) => {
    try {
      const UserEventRelation = await UsersEvents.findByPk(req.params.id);
      if (UserEventRelation) {
        res.status(200).send(UserEventRelation);
      } else {
        res.status(404).send({
          message: `Cannot find Relation with id=${req.params.id}.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Relation with id=' + req.params.id
      });
    }
  };

  const updateUserEventRelation = async (req, res) => {
    try {
      const num = await UsersEvents.update(req.body, {
        where: { id: req.params.id }
      });
      if (num == 1) {
        res.send({
          message: 'Relation was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Relation with id=${req.params.id}. Maybe Relation was not found or req.body is empty!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Error updating Relation with id=' + req.params.id
      });
    }
  };

  const deleteUserEventRelation = async (req, res) => {
    try {
      const num = await UsersEvents.destroy({
        where: { id: req.params.id }
      });
      if (num == 1) {
        res.send({
          message: 'Relation was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Relation with id=${req.params.id}. Maybe Relation was not found!`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Relation with id=' + req.params.id
      });
    }
  };

export {
    createCUserEventRelation,
    getAllUserEventRelations,
    getUserEventRelationById,
    updateUserEventRelation,
    deleteUserEventRelation
};