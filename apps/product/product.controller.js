export const index = (request, response) => {
  response.status(200).json({ msg: 'OK' });
};

export const view = (request, response) => {
  response.status(200).json({ msg: 'OK' });
};

export const create = (request, response) => {
  response.status(201).json({ msg: 'OK' });
};

export const update = (request, response) => {
  response.status(200).json({ msg: 'OK' });
};

export const destroy = (request, response) => {
  response.status(200).json({ msg: 'OK' });
};
