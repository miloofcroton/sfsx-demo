import { connect } from 'react-redux';
import OrderChart from './Chart';

import { setPrice } from '../../../../data/store/resources/orders/actions';
import { getTickerOrders } from '../../../../data/store/resources/orders/selectors';

const mapStateToProps = state => ({
  orders: getTickerOrders(state)
});

const mapDispatchToProps = dispatch => ({
  setPrice: price => dispatch(setPrice(price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderChart);
