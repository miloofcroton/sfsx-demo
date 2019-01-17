import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TickerSelect = ({ setTicker }) => {

  const onChange = e => {
    setTicker(e.target.value);
  };


  return (
    <form>
      <label htmlFor="ticker">pick a stock: </label>
      <select
        type="text"
        name="ticker"
        defaultValue={''}
        onChange={onChange}
      >
        <option value='' disabled>Select</option>
        <option value='GOOG'>GOOG</option>
        <option value='FB'>FB</option>
        <option value='ORCL'>ORCL</option>
      </select>
    </form>
  );
};

import { setTicker } from '../../../data/store/resources/orders/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setTicker: order => dispatch(setTicker(order))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TickerSelect);
