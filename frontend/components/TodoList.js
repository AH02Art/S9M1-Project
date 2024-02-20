import React from 'react'
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    showAll: true
  };

  toggleShowAll = (event) => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll
    })
  }

  render() {
    const { todos, toggleCompletion } = this.props;
    const filtered = todos.filter((item) => !item.completed || this.state.showAll)
    return (
      <div>
        {
          filtered.map((item) => (
            <Todo key={item.id} todo={item} toggleCompletion={toggleCompletion} />
          ))
        }
        <button onClick={this.toggleShowAll}>{this.state.showAll ? "Hide" : "Show"} Completed</button>
      </div>
    )
  }
}
