const winston = require('winston');

const logConfiguration = {
    transports: [
      new winston.transports.File({
        filename: './logs/winstonLogs.log',
      }),
    ],
  };

  const logger = winston.createLogger(logConfiguration);
  module.exports = { logger };