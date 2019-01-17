import { connect } from 'react-redux';
import OrderList from './List';

import { fetchOrders } from '../../../../data/store/resources/orders/actions';
import { getOrders } from '../../../../data/store/resources/orders/selectors';

const mapStateToProps = state => ({
  list: getOrders(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
