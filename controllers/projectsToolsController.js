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

    //Get all project needed specific tool 
    const  getProjectsByToolId = async (req, res) => {
      try {
        const{id} = req.params;
        const projects = await ProjectsTools.findAll({
          where: {
            tool_id: id
          }
        })
        if (projects.length) {
          res.status(200).send(Tools);
        } else {
          res.status(404).send({
            message: `The Tool with id=${id} has not added to any Orojects yet.`
          });
        }
      } catch (error) {
        res.status(500).send({
          message: error.message || 'Error retrieving Projects have Tool with id=' + id
        });
      }
    };
    
    //Get all Tools for specific Project 
    const  getToolsByProjectId = async (req, res) => {
      const{id} = req.params;
      try {
        const tools = await ProjectsTools.findAll({
          where: {
          project_id: id
          }
        })
        if (tools.length) {
          res.status(200).send(tools);
        } else {
          res.status(404).send({
            message: `There is no Tools added to Project with id=${id}.`
          });
        }
      } catch (error) {
        res.status(500).send({
          message: error.message || 'Error retrieving Tools for Project with id=' + id
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
    getProjectsByToolId,
    getToolsByProjectId,
    deleteProjectToolRelation
};