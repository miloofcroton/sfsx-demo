import { Router } from 'express';
import orders from './orders/routes';

const resources = [
  orders
];

export default Router().use('/', ...resources);
