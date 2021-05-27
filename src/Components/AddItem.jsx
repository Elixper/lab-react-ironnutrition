import React, { Component } from 'react';

export default class AddItem extends Component {
  state = {
    name: '',
    image: '',
    calories: 0,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const food = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    };

    this.props.callbackFn(food);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Food Item Form</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div>
            <label htmlFor="calories">Type</label>
            <input
              type="number"
              name="calories"
              id="calories"
              onChange={this.handleChange}
              value={this.state.calories}
            />
          </div>
          <button type="submit"> Add New Food Item</button>
        </form>
      </div>
    );
  }
}