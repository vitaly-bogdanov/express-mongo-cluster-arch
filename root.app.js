import express from 'express';

import {
  API_VERSION_PATH,
  routerApiV1,
} from './core/router/index.js';

export const app = express()
  .use(API_VERSION_PATH.V1, routerApiV1);
