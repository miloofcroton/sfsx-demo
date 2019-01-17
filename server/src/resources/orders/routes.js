import { Router } from 'express';
import Order from './model';

export default Router()

  .get('/orders/:id', (req, res, next) => {
    const { id } = req.params;
    Order.findById(id)
      .lean()
      .then(order => res.json(order))
      .catch(next);
  })

  .get('/orders', (req, res, next) => {
    Order.find()
      .lean()
      .then(orders => res.json(orders))
      .catch(next);
  })

  .post('/orders', (req, res, next) => {
    const { ticker, side, price, shares, open } = req.body;
    Order.create({ ticker, side, price, shares, open })
      .then(order => res.json(order))
      .catch(next);
  });
