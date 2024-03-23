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
  
//Get all Events that manage by specific Company
const  getEventsByCompanyId = async (req, res) => {
  try {
    const{id} = req.params;
    const events = await CompaniesEvents.findAll({
      where: {
        company_id: id
      }
    })
    if (events.length) {
      res.status(200).send(events);
    } else {
      res.status(404).send({
        message: `The Company with id=${id} has not manage any Event yet.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving Events for Company with id=' + id
    });
  }
};

//Get all Companies that manage specific Event 
const  getCompniesByEventId = async (req, res) => {
  const{id} = req.params;
  try {
    const company = await CompaniesEvents.findAll({
      where: {
      event_id: id
      }
    })
    if (company.length) {
      res.status(200).send(company);
    } else {
      res.status(404).send({
        message: `There is no companies manage the Event with id=${id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving companies for Event with id=' + id
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
    getCompniesByEventId,
    getEventsByCompanyId,
    deleteCompanyEventRelation
};