import CompaniesEvents from "../models/CompaniesEvents.js";

const createCompanyEventRelation = async (req, res) => {
    try {
      const companyEventRelation = await CompaniesEvents.create(req.body);
      res.status(201).send(companyEventRelation);

    } catch(error){
      res.status(500).send({
        message: error.message || 'Some error occurred while creating the Relation.'

      })
    }

};

const getAllCompanyEventRelations = async (req, res) => {
    try {
      const companyEventRelations = await CompaniesEvents.findAll();
      res.status(200).send(companyEventRelations);
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Some error occurred while retrieving Relations.'
      });
    }
  };

  const  getCompanyEventRelationById = async (req, res) => {
    try {
      const companyEventRelations = await User.findByPk(req.params.id);
      if (companyEventRelations) {
        res.status(200).send(companyEventRelations);
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

  const updateCompanyEventRelation = async (req, res) => {
    try {
      const num = await CompaniesEvents.update(req.body, {
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

  const deleteCompanyEventRelation = async (req, res) => {
    try {
      const num = await CompaniesEvents.destroy({
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
    createCompanyEventRelation,
    getAllCompanyEventRelations,
    getCompanyEventRelationById,
    updateCompanyEventRelation,
    deleteCompanyEventRelation
};