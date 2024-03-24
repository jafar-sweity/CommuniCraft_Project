import { Server } from "socket.io";
import { formatMessage } from "./utils/messages.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} from "./utils/users.js";

import path from "path";
import { server } from "./app.js";
import express from "express";

const initialaizeChatSystem = (app) => {
  const io = new Server(server);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  // Set static folder
  app.use(express.static(path.join(__dirname, "public")));

  // ChatCord Bot name
  const botName = "CommuniCraft App";

  // Run when client connects
  io.on("connection", (socket) => {
    socket.on("joinRoom", ({ username, room }) => {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);

      // Welcome current user
      socket.emit("message", formatMessage(botName, "Welcome <3 "));

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          "message",
          formatMessage(botName, `${user.username} has joined the chat`)
        );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    });

    // Listen for chatMessage
    socket.on("chatMessage", (msg) => {
      const user = getCurrentUser(socket.id);

      io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
        io.to(user.room).emit(
          "message",
          formatMessage(botName, `${user.username} has left the chat`)
        );
        io.to(user.room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(user.room),
        });
      }
    });
  });
};

export { initialaizeChatSystem };
