import Company from '../models/Company.js';

const createCompany = async (req, res) => {
  try {
    const { name, location } = req.body;
    if (!name || !location) {
      return res.status(400).send({
        message: "Company name can't be empty!"
      });
    }
    const company = await Company.create({ name, location });
    res.status(201).send(company);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Company.'
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).send(companies);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving companies.'
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.status(200).send(company);
    } else {
      res.status(404).send({
        message: `Cannot find company with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error retrieving company with id=' + req.params.id
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const num = await Company.update(req.body, {
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Company was updated successfully.'
      });
    } else {
      res.send({
        message: `Cannot update company with id=${req.params.id}. Maybe company was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error updating company with id=' + req.params.id
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const num = await Company.destroy({
      where: { id: req.params.id }
    });
    if (num == 1) {
      res.send({
        message: 'Company was deleted successfully!'
      });
    } else {
      res.send({
        message: `Cannot delete company with id=${req.params.id}. Maybe company was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Could not delete company with id=' + req.params.id
    });
  }
};

export {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
};
