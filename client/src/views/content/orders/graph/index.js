import { connect } from 'react-redux';
import OrderChart from './Chart';

import { fetchOrders } from '../../../../data/store/resources/orders/actions';
import { getTickerOrders } from '../../../../data/store/resources/orders/selectors';

const mapStateToProps = state => ({
  orders: getTickerOrders(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderChart);
