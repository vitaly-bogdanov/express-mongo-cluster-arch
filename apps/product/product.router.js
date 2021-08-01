import { Router } from 'express';

import { PRODUCT_PATH } from './product.constant.js';
import {
  index,
  view,
  create,
  update,
  destroy,
} from './product.controller.js';

export const productRouter = new Router()
  .get(PRODUCT_PATH, index)
  .get(`${PRODUCT_PATH}/:id`, view)
  .post(PRODUCT_PATH, create)
  .patch(`${PRODUCT_PATH}/:id`, update)
  .delete(`${PRODUCT_PATH}/:id`, destroy);
