import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class OrderCreate extends PureComponent {

  static propTypes = {
    postOrder: PropTypes.func.isRequired
  };

  state = {
    ticker: '',
    side: '',
    price: '',
    shares: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = e => {
    e.preventDefault();
    const { postOrder } = this.props;
    const { ticker, side, price, shares } = this.state;
    postOrder({ ticker, side, price, shares, open: true });
  };

  render() {

    const { ticker, side, price, shares } = this.state;

    return (
      <div>
        <form onSubmit={this.createOrder}>
          <div>
            <label htmlFor="ticker">ticker: </label>
            <select
              type="text"
              name="ticker"
              defaultValue={ticker}
              onChange={this.onChange}
            >
              <option value='GOOG'>GOOG</option>
              <option value='FB'>FB</option>
              <option value='ORCL'>ORCL</option>
            </select>
          </div>
          <div>
            <label htmlFor="side">side: </label>
            <select
              type="text"
              name="side"
              defaultValue={side}
              onChange={this.onChange}
            >
              <option value='buy'>buy</option>
              <option value='sell'>sell</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">price: </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="shares">shares: </label>
            <input
              type="number"
              name="shares"
              value={shares}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="submit">Create new order</button>
          </div>
        </form>
      </div>
    );
  }
}

import { postOrder } from '../../../../data/store/resources/orders/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postOrder: order => dispatch(postOrder(order))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCreate);
