import { ExeptionApi } from './exeption.api.js';

export const exeptionMiddleware = (error, request, response) => {
  if (error instanceof ExeptionApi) {
    return response.status(error.status).json({ message: error.message, errors: error.errors });
  }
  return response.status(500).json({ message: 'Непредвиденная ошибка' });
};
