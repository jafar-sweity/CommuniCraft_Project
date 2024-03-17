import Skill from '../models/Skill.js';

const createSkill = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).send({
        message: "Skill name can't be empty!"
      });
    }
    const skill = await Skill.create({ name, description });
    res.status(201).send(skill);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Skill.'
    });
  }
};

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).send(skills);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving skills.'
    });
  }
};

const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (skill) {
      res.status(200).send(skill);
    } else {
      res.status(404).send({
        message: `Cannot find Skill with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving Skill with id=' + req.params.id
    });
  }
};

const updateSkill = async (req, res) => {
  try {
    const num = await Skill.update(req.body, {
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Skill was updated successfully.'
      });
    } else {
      res.send({
        message: `Cannot update Skill with id=${req.params.id}. Maybe Skill was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating Skill with id=' + req.params.id
    });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const num = await Skill.destroy({
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Skill was deleted successfully!'
      });
    } else {
      res.send({
        message: `Cannot delete Skill with id=${req.params.id}. Maybe Skill was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete Skill with id=' + req.params.id
    });
  }
};

export {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill
};
