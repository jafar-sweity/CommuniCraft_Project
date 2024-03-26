import express from "express";
import {sequelize} from "./models/index.js";
import router from "./routes/router.js";
import "./models/index.js";
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import { initialaizeChatSystem } from "./chatSystem.js";

dotenv.config();
const app = express();

const server = http.createServer(app);
initialaizeChatSystem(app);

// app.js

const PORT = process.env.PORT || 30030;
app.use(express.json());
app.use(cookieParser());
app.use(router);
app.get('/test', (req, res) => {
  res.send('Server is working');
});
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and models synced");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database models", err);
  });

export { server };
