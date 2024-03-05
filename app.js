//import 'dotenv/config';
import dotenv from 'dotenv'
import express from 'express';
import sequelize from './config/sequelize.js';
import router from './routes/router.js';
import './models/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

sequelize.sync().then(() => {
  console.log('Database connected and models synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to sync database models', err);
});