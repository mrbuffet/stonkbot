import { createLogger, format, transports } from 'winston';
import { settings } from '../config/config.js';

const { combine, splat, timestamp, printf, colorize } = format;

const textFormat = printf(({ level, message, timestamp, ...metadata }) => {
    let metadataLogString = '';
    if (metadata && Object.keys(metadata).length > 0) {
        metadataLogString = JSON.stringify(metadata);
    }
    const msg = `${timestamp} [${level}] : ${message} ${metadataLogString}`;
    return msg;
});

const defaultFormat = combine(
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    textFormat,
    splat()
);
export const logger = createLogger({
    level: settings.logLevel,
    transports: [
        new transports.File({
            filename: 'logs/testLogger.log',
            format: defaultFormat,
            handleExceptions: true
        }),
        new transports.Console({
            format: combine(colorize(), defaultFormat),
            silent: !settings.enableConsoleLogs,
            handleExceptions: true
        })
    ]
});
