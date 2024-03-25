import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const MapsRouter = express.Router();
const API_TOKEN = process.env.MAPS_API_TOKEN;

const externalApi = axios.create({
  baseURL: 'https://geocode.search.hereapi.com',
  params: {
    apiKey: API_TOKEN 
  }
});

MapsRouter.get('/', async (req, res) => {  
  try {
    const response = await externalApi.get('/v1/geocode', { params: req.query });
    res.json(response.data);
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    const message = error.response ? error.response.data.message : 'Error fetching data from maps external API';
    res.status(status).json({ message, error: error.message });
  }
});

export default MapsRouter;
