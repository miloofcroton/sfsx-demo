import { Router } from 'express';
import Item from './model';

export default Router()

  .get('/items/:id', (req, res, next) => {
    const { id } = req.params;
    Item.findById(id)
      .lean()
      .then(item => res.json(item))
      .catch(next);
  })

  .get('/items', (req, res, next) => {
    Item.find()
      .lean()
      .then(items => res.json(items))
      .catch(next);
  })

  .post('/items', (req, res, next) => {
    const { title, description } = req.body;
    Item.create({ title, description })
      .then(item => res.json(item))
      .catch(next);
  });
