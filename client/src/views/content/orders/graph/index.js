import { connect } from 'react-redux';
import OrderChart from './Chart';

import { setPrice } from '../../../../data/store/resources/orders/actions';
import { getTickerOrders, getSelectedPrice } from '../../../../data/store/resources/orders/selectors';

const mapStateToProps = state => ({
  orders: getTickerOrders(state),
  selectedPrice: getSelectedPrice(state),
});

const mapDispatchToProps = dispatch => ({
  setPrice: price => dispatch(setPrice(price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderChart);
