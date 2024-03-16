import User from '../models/User.js';

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the User.'
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving users.'
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({
        message: `Cannot find User with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving User with id=' + req.params.id
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const num = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'User was updated successfully.'
      });
    } else {
      res.send({
        message: `Cannot update User with id=${req.params.id}. Maybe User was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating User with id=' + req.params.id
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const num = await User.destroy({
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'User was deleted successfully!'
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${req.params.id}. Maybe User was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete User with id=' + req.params.id
    });
  }
};

export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
