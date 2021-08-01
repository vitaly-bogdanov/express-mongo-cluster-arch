import dotenv from 'dotenv';

import { startMaster } from './root.master.js';
import { startWorker } from './root.worker.js';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

startMaster();
startWorker();
