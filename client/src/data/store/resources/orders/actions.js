import { getOrders, getOrder, createOrder } from '../../../services/mongo/orders';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_LOADING = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_DONE = 'FETCH_ORDERS_DONE';
export const fetchOrders = () => ({
  type: FETCH_ORDERS,
  loadStart: FETCH_ORDERS_LOADING,
  loadEnd: FETCH_ORDERS_DONE,
  payload: getOrders()
});

export const FETCH_ORDER = 'FETCH_ORDER';
export const FETCH_ORDER_LOADING = 'FETCH_ORDER_START';
export const FETCH_ORDER_DONE = 'FETCH_ORDER_DONE';
export const fetchOrder = id => ({
  type: FETCH_ORDER,
  loadStart: FETCH_ORDER_LOADING,
  loadEnd: FETCH_ORDER_DONE,
  payload: getOrder(id)
});

export const POST_ORDER = 'POST_ORDER';
export const postOrder = order => ({
  type: POST_ORDER,
  payload: createOrder(order)
});
