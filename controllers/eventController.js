import Event from '../models/Event.js';

const createEvent = async (req, res) => {
  try {
    const { name, description, date, location, amount } = req.body;
    if (!name || !description || !date || !location || !amount) {
      return res.status(400).send({
        message: "All fields must be filled out!"
      });
    }
    const event = await Event.create({ name, description, date, location, amount });
    res.status(201).send(event);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Event.'
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving events.'
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.status(200).send(event);
    } else {
      res.status(404).send({
        message: `Cannot find event with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving event with id=' + req.params.id
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const num = await Event.update(req.body, {
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Event was updated successfully.'
      });
    } else {
      res.send({
        message: `Cannot update event with id=${req.params.id}. Maybe event was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating event with id=' + req.params.id
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const num = await Event.destroy({
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Event was deleted successfully!'
      });
    } else {
      res.send({
        message: `Cannot delete event with id=${req.params.id}. Maybe event was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete event with id=' + req.params.id
    });
  }
};

export {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
