import React from 'react'

export default class Form extends React.Component {
  state = {
    name: ""
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ ...this.state, name: "" });
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ ...this.state, name: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="enter todo" value={this.state.name} onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}
