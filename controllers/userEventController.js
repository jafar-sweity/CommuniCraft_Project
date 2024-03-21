import UsersEvents from "../models/UsersEvents.js";
import Event from "../models/Event.js";
const createUserEventRelation = async (req, res) => {
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

  //Get all Events that the user register in 
  const  getEventsByUserId = async (req, res) => {
    try {
      const{id} = req.params;
      const eventsIds = await UsersEvents.findAll({
        attributes: ["event_id"],
        where: {user_id: id  }
      });
      const eventsNames = await Promise.all(eventsIds.map(async (eventUser) =>{
        const eventId = eventUser.event_id;
        //get project name for each id..
        const eventName = await Event.findByPk( eventId, {
        //  attributes: ["name"]
        }); 
        return  eventName;
       }))

      if (eventsNames.length) {
        res.status(200).send({eventsNames: eventsNames});
      } else {
        res.status(404).send({
          message: `The user with id=${id} has not register in any Event yet.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving Events for user with id=' + id
      });
    }
  }
  
  //Get all users register in specific Event 
  const  getUsersByEventId = async (req, res) => {
    const{id} = req.params;
    try {
      const users = await UsersEvents.findAll({
        where: {
        event_id: id
        }
      })
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send({
          message: `There is no users register in the Event with id=${id}.`
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Error retrieving users for Event with id=' + id
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
    createUserEventRelation,
    getAllUserEventRelations,
    getEventsByUserId,
    getUsersByEventId,
    deleteUserEventRelation
};