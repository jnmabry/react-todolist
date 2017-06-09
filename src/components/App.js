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

const TodoList = (props) => {
    const todoItems = props.todoItems.map(todo =>
        <li className="todo-list-item" key={todo.id}>{todo.todo}
            <button>X</button>
        </li>);

    return <ul className="todo-list">{todoItems}</ul>
}

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
}

class App extends Component {

    todoCounter = 6;

    constructor(props){
        super(props);
        this.state = {todoItems: TODOS, value: ""};
        this.updateInput = this.updateInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(event){
        TODOS.push({id:this.todoCounter++, todo: this.state.value});
        this.setState({todoItems: TODOS});
        event.preventDefault();
    }

    updateInput(event){
        this.setState({value: event.target.value});
    }

    render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>React ToDo List</h1>
          <div className="add-todos">
              <form onSubmit={this.addTodo}>
                  <input type="text" value={this.state.value} onChange={this.updateInput} />
                  <input type="submit" value="Submit" />
              </form>
          </div>
          <div className="todos">
            <TodoList todoItems={this.state.todoItems}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

