import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderCard from './Card';

export default class OrderList extends PureComponent {

  static propTypes = {
    list: PropTypes.array
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>List of orders:</h2>
        {!!list && list.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    );
  }
}
