import ProjectsTools from "../models/ProjectsTools.js";

const createProjectToolRelation = async (req, res) => {
    try {
      const projectToolRelation = await ProjectsTools.create(req.body);
      res.status(201).send(projectToolRelation);

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'

      })
    }

};

const getAllProjectToolRelations = async (req, res) => {
    try {
      const projectToolRelation = await ProjectsTools.findAll();
      res.status(200).send(projectToolRelation);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  const  getProjectToolRelationById = async (req, res) => {
    try {
      const projectToolRelation = await ProjectsTools.findByPk(req.params.id);
      if (projectToolRelation) {
        res.status(200).send(projectToolRelation);
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

  const updateProjectToolRelation = async (req, res) => {
    try {
      const num = await ProjectsTools.update(req.body, {
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

  const deleteProjectToolRelation = async (req, res) => {
    try {
      const num = await ProjectsTools.destroy({
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
    createProjectToolRelation,
    getAllProjectToolRelations,
    getProjectToolRelationById,
    updateProjectToolRelation,
    deleteProjectToolRelation
};