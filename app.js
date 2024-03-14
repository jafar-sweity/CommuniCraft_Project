// app.js

import express from 'express';
import sequelize from './config/sequelize.js';
import AuthRouter from './routes/AuthRouter.js';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use('/auth', AuthRouter);
app.get('/', (req, res) => {
  res.send('Welcome too the homepage');
});



sequelize.sync().then(() => {
  console.log('Database connected and models synced');
 
}).catch(err => {
  console.error('Failed to sync database models', err);
});

 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
