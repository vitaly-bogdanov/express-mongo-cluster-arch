import cluster from 'cluster';

import { app } from './root.app.js';
import { databaseStartConnect } from './core/database/index.js';

export const startWorker = () => {
  if (cluster.isWorker) {
    databaseStartConnect().then(() => {
      app.listen(process.env.PORT, () => console.log(`⚡ SERVER START pid: ${process.pid} ⚡`));
      process
        .on('uncaughtException', (error) => {
          console.error(error.message);
          console.error(error.stack);
          process.exit(1);
        })
        .on('SIGINT', () => {
          console.log(`SIGINT ${process.pid}`);
          process.exit(0);
        })
        .on('SIGTERM', () => {
          console.log(`SIGTERM ${process.pid}`);
          process.exit(0);
        })
        .on('SIGUSR2', () => {
          console.log(`SIGUSR2 ${process.pid}`);
          process.exit(1);
        });
    });
  }
};
