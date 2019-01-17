import { get, post } from '../lib/requests';

const ORDERS_API = '/api/orders';

export const getOrder = id => get(`${ORDERS_API}/${id}`);

export const getOrders = () => get(`${ORDERS_API}`);

export const createOrder = order => post(`${ORDERS_API}`, order);
