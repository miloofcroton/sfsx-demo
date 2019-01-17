import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './Card';

export default class ItemList extends PureComponent {

  static propTypes = {
    // list: PropTypes.array
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>List of items:</h2>
        {!!list && list.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    );
  }
}
