// app.js

import express from 'express';
import sequelize from './config/sequelize.js';
import cookieParser from 'cookie-parser';
import router from './routes/router.js';


export const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(router);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and models synced");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })      
  .catch((err) => {
    console.error("Failed to sync database models", err);
  });

