import { createLogger, format, transports } from 'winston';

// Create a logger

const customerLogger = createLogger({
  transports: [
    new transports.File({ filename: 'customer.log',
    level: 'info',
    format: format.combine(format.timestamp(), format.json())})
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'customerError.log',
    level: 'error',
    format: format.combine(format.timestamp(), format.json())})
  ]
});

module.exports = customerLogger;
export default customerLogger;
