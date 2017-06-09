import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

export const TODOS = [
  {
    todo: "Check the mail",
      id: 1,
  },
    {
    todo: "Walk the dog",
    id: 2,
  },
    {
    todo: "Feed the cat",
    id: 3,
  },
  {
  todo: "Cook dinner",
    id: 4,
  },
  {
    todo: "Get a haircut",
    id: 5,
  },
];

class ToDo extends Component {

    constructor(props){
        super(props);
        this.state = {todoItem: "Add some todos"};
    }

    render() {
      return (
          <li className="todo-list-item">{this.props.todoItem}
            <button>X</button>
          </li>
      );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    static propTypes = {
        todoItems: PropTypes.arrayOf(PropTypes.shape({
            todo: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired).isRequired,
    }

    render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>React ToDo List</h1>
          <div className="add-todos">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="todos">
            <ul className="todo-list">
              {TODOS.map((todo) =>
              <ToDo todoItem={todo.todo} key={todo.id}/>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

