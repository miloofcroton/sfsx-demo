import {
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_DONE,
  FETCH_ITEMS,
  FETCH_ITEM_LOADING,
  FETCH_ITEM_DONE,
  FETCH_ITEM
} from './actions';

const initialState = {
  loading: false,
  list: [],
  details: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ITEMS_LOADING:
      return { ...state, loading: true };
    case FETCH_ITEMS_DONE:
      return { ...state, loading: false };
    case FETCH_ITEMS:
      return { ...state, list: payload };
    case FETCH_ITEM_LOADING:
      return { ...state, loading: true };
    case FETCH_ITEM_DONE:
      return { ...state, loading: false };
    case FETCH_ITEM:
      return { ...state, details: payload };
    default:
      return state;
  }
}
