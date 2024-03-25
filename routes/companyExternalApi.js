import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const CompanyExternalRouter = express.Router();
const API_TOKEN = process.env.COMPANY_API_TOKEN; 
const API_URL = 'https://api.thecompaniesapi.com/v1/companies';

CompanyExternalRouter.get('/', async (req, res) => {  
  try {
    const response = await axios.get(API_URL, {
      params: {
        ...req.query, 
        token: API_TOKEN 
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from company external API', error: error.message });
  }
});

export default CompanyExternalRouter;
