import { Router } from 'express';
import items from './items/routes';

const resources = [
  items
];

export default Router().use('/', ...resources);
