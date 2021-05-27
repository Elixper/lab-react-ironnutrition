import React, { Component } from 'react';

export default class SearchItem extends Component {
  handleChange = (event) => {
    this.props.callbackFoodFn(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Search a food item"
        />
      </div>
    );
  }
}
