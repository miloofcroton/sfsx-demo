import { getItems, getItem, createItem } from '../../../services/mongo/items';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_LOADING = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_DONE = 'FETCH_ITEMS_DONE';
export const fetchItems = () => ({
  type: FETCH_ITEMS,
  loadStart: FETCH_ITEMS_LOADING,
  loadEnd: FETCH_ITEMS_DONE,
  payload: getItems()
});

export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_LOADING = 'FETCH_ITEM_START';
export const FETCH_ITEM_DONE = 'FETCH_ITEM_DONE';
export const fetchItem = id => ({
  type: FETCH_ITEM,
  loadStart: FETCH_ITEM_LOADING,
  loadEnd: FETCH_ITEM_DONE,
  payload: getItem(id)
});

export const POST_ITEM = 'POST_ITEM';
export const postItem = item => ({
  type: POST_ITEM,
  payload: createItem(item)
});
