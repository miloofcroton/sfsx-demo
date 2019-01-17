import { get, post } from '../lib/requests';

const ITEMS_API = '/api/items';

export const getItem = id => get(`${ITEMS_API}/${id}`);

export const getItems = () => get(`${ITEMS_API}`);

export const createItem = item => post(`${ITEMS_API}`, item);
