import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ItemCreate extends PureComponent {

  static propTypes = {
    postItem: PropTypes.func.isRequired
  };

  state = {
    title: '',
    description: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createItem = e => {
    e.preventDefault();
    const { postItem } = this.props;
    const { title, description } = this.state;
    postItem({ title, description });
  };

  render() {

    const { title, description } = this.state;

    return (
      <div>
        <form onSubmit={this.createItem}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="submit">Create new item</button>
          </div>
        </form>
      </div>
    );
  }
}

import { postItem } from '../../../../data/store/resources/items/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  postItem: item => dispatch(postItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCreate);
