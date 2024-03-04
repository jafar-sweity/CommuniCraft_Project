// app.js
import 'dotenv/config';
import express from 'express';
import sequelize from './config/sequelize.js';
import router from './routes/router.js';
import './models/Admins.js';

import AuthRouter from './routes/AuthRouter.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/auth', AuthRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

app.use(router);


sequelize.sync().then(() => {
  console.log('Database connected and models synced');
 
}).catch(err => {
  console.error('Failed to sync database models', err);
});

 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });