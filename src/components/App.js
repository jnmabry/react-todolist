import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

const TODOS = [
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

function ToDo(props) {
  return(
    <li className="todo-list-item">{props.todoItem}
      <button>X</button>
    </li>
  );
}

ToDo.propTypes = {
  todoItem: PropTypes.string.isRequired,
}

function AddToDos() {
  return(
    <div className="add-todos">
      <input type="text"/>
      <input type="submit" value="add"/>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>React ToDo List</h1>
          <AddToDos/>
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

App.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape({
      todo: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default App;
