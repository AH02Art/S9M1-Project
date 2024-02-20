import React from 'react'
import Form from "./Form";
import TodoList from './TodoList';

let id = 0;
function makeId() {
return ++id;
}

const initialTodos = [
  { id: makeId(), name: "Walk the dog", completed: false },
  { id: makeId(), name: "Learn React", completed: true },
  { id: makeId(), name: "Have fun", completed: false }
];

export default class App extends React.Component {
  state = {
    todos: initialTodos
  };

  // making the ability to add new tasks to the todos object
  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: makeId(), completed: false, name })
    });
  };

  // controlling if a task is completed or not
  toggleCompletion = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((items) => {
        if (id === items.id) return { ...items, completed: !items.completed };
        return items;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  };
}
