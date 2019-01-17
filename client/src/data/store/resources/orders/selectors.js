export const getOrders = state => state.orders.list;

export const getOrder = state => state.orders.details;

export const getTickerOrders = state => state.orders.list
  .filter(order => order.ticker === state.orders.selectedTicker);
