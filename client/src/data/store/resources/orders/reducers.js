import {
  FETCH_ORDERS_LOADING,
  FETCH_ORDERS_DONE,
  FETCH_ORDERS,
  FETCH_ORDER_LOADING,
  FETCH_ORDER_DONE,
  FETCH_ORDER
} from './actions';

const initialState = {
  loading: false,
  list: [],
  details: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ORDERS_LOADING:
      return { ...state, loading: true };
    case FETCH_ORDERS_DONE:
      return { ...state, loading: false };
    case FETCH_ORDERS:
      return { ...state, list: payload };
    case FETCH_ORDER_LOADING:
      return { ...state, loading: true };
    case FETCH_ORDER_DONE:
      return { ...state, loading: false };
    case FETCH_ORDER:
      return { ...state, details: payload };
    default:
      return state;
  }
}