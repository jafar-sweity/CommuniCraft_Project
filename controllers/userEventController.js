import UsersEvents from "../models/UsersEvents.js";
import Event from "../models/Event.js";
import logger from "../logger.js";

const createUserEventRelation = async (req, res) => {
    try {
      const UserEventRelation = await UsersEvents.create(req.body);
      res.status(201).send(UserEventRelation);
      logger.info(`Create User Event Relation successfully`)

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'
      })
    logger.error(error.message || 'Some error occurred while creating the Relation.')
    }

};

const getAllUserEventRelations = async (req, res) => {
    try {
      const UserEventRelation = await UsersEvents.findAll();
      res.status(200).send(UserEventRelation);
      logger.info(`Get All User Event relations successfully`)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
      logger.error(error.message || 'Some error occurred while retrieving Relations.')
    }
  };

  //Get all Events that the user register in 
  const  getEventsByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const eventsIds = await UsersEvents.findAll({
        attributes: ["EventId"],
        where: {UserId: id  }
      });
      const eventsNames = await Promise.all(eventsIds.map(async (eventUser) =>{
        const eventId = eventUser.EventId;
        //get project name for each id..
        const eventName = await Event.findByPk( eventId, {
        //  attributes: ["name"]
        }); 
        return  eventName;
       }))

      if (eventsNames.length) {
        res.status(200).send({eventsNames: eventsNames});
        logger.info(`Get Events for user with id ${id} successfully`)
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not register in any Event yet.`
        });
        logger.info(`The user with id=${id} has not register in any Event yet.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Events for user with id=' + id
      });
      logger.error(error.message || 'Error retrieving Events for user with id=' + id)
    }
  }
  
  //Get all users register in specific Event 
  const  getUsersByEventId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await UsersEvents.findAll({
        where: {
        EventId: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
        logger.info(`Get Users by event with id ${id} successfully`)
      } else {
        res.status(404).send({
          message: `There is no users register in the Event with id=${id}.`
        });
        logger.info(`There is no users register in the Event with id=${id}.`)
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for Event with id=' + id
      });
      logger.error(error.message || 'Error retrieving Users for Events with id=' + id)
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
        logger.info(`Relation with id ${req.params.id} was deleted successfully`)
      } else {
        res.send({
          message: `Cannot delete Relation with id=${req.params.id}. Maybe Relation was not found!`
        });
        logger.info(`Cannot delete Relation with id=${req.params.id}. Maybe Relation was not found!`)
      }
    } catch (error) {
      res.status(500).send({
        message: 'Could not delete Relation with id=' + req.params.id
      });
      logger.error('Could not delete Relation with id=' + req.params.id)
    }
  };

export {
    createUserEventRelation,
    getAllUserEventRelations,
    getEventsByUserId,
    getUsersByEventId,
    deleteUserEventRelation
};