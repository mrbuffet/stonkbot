import * as dotenv from 'dotenv';
import { Config, Settings } from './types';

dotenv.config();

// General environment settings
export const settings: Settings = {
    logLevel: process.env.LOG_LEVEL || 'debug',
    enableConsoleLogs: process.env.ENABLE_CONSOLE_LOGS ? process.env.ENABLE_CONSOLE_LOGS === 'true' : true
};

// internal functionality config
export const config: Config = {
    test: 'test'
};
