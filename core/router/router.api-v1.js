import { Router } from 'express';

import { productRouter } from '../../apps/product/index.js';

export const routerApiV1 = new Router()
  .use(productRouter);
