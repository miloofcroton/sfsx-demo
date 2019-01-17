import {
  FETCH_ORDERS_LOADING,
  FETCH_ORDERS_DONE,
  FETCH_ORDERS,
  FETCH_ORDER_LOADING,
  FETCH_ORDER_DONE,
  FETCH_ORDER,
  SET_TICKER,
  SET_PRICE,
} from './actions';

const initialState = {
  loading: false,
  list: [],
  details: null,
  selectedTicker: null,
  selectedPrice: null
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
    case SET_TICKER:
      return { ...state, selectedTicker: payload };
    case SET_PRICE:
      return { ...state, selectedPrice: payload };
    default:
      return state;
  }
}
