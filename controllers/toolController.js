import Tool from '../models/Tool.js';
import logger from "../logger.js";

const createTool = async (req, res) => {
  try {
    const { name, price } = req.body;
    const tool = await Tool.create({ name, price });
    res.status(201).send(tool);
    logger.info(`Create Tool successfully`)
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Tool.'
    });
    logger.error(error.message || 'Some error occurred while creating the Tool.')
  }
};

const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.findAll();
    res.status(200).send(tools);
    logger.info(`Get All Tools successfully`)
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving tools.'
    });
    logger.error(error.message || 'Some error occurred while retrieving tools.')
  }
};

const getToolById = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (tool) {
      res.status(200).send(tool);
      logger.info(`Get Tool with id ${req.params.id} successfully`)
    } else {
      res.status(404).send({
        message: `Cannot find Tool with id=${req.params.id}.`
      });
      logger.info(`Cannot find Tool with id=${req.params.id}.`)
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving Tool with id=' + req.params.id
    });
    logger.error(error.message || 'Error retrieving Tool with id=' + req.params.id)
  }
};

const updateTool = async (req, res) => {
  try {
    const num = await Tool.update(req.body, {
      where: { tool_id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Tool was updated successfully.'
      });
      logger.info(`Tool with id ${req.params.id} was updated successfully.`)
    } else {
      res.send({
        message: `Cannot update Tool with id=${req.params.id}. Maybe Tool was not found or req.body is empty!`
      });
      logger.info(`Cannot update Tool with id=${req.params.id}. Maybe Tool was not found or req.body is empty!`)
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating Tool with id=' + req.params.id
    });
    logger.error('Error updating Tool with id=' + req.params.id)
  }
};

const deleteTool = async (req, res) => {
  try {
    const num = await Tool.destroy({
      where: { tool_id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Tool was deleted successfully!'
      });
      logger.info(`Tool with id ${req.params.id} was deleted successfully!`)
    } else {
      res.send({
        message: `Cannot delete Tool with id=${req.params.id}. Maybe Tool was not found!`
      });
      logger.info(`Cannot delete Tool with id=${req.params.id}. Maybe Tool was not found!`)
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete Tool with id=' + req.params.id
    });
    logger.error('Could not delete Tool with id=' + req.params.id)
  }
};

export {
  createTool,
  getAllTools,
  getToolById,
  updateTool,
  deleteTool
};
