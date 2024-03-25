import { createLogger, format, transports } from "winston";
const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "info",
      filename: "UsersLogs.log",
    }),
    new transports.File({
      level: "error",
      filename: "ErrorsLogs.log",
    }),
  ],
  format: format.combine(format.timestamp(), format.json()),
});

export default logger;
