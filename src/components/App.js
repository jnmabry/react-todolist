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

const TodoList = (props) => {
    const todoItems = props.todoItems.map(todo =>
        <li className="todo-list-item" key={todo.id}>{todo.todo}
        <button onClick={() => props.deleteTodo(todo.id)}>X</button>
        </li>
    );

    return <ul className="todo-list">{todoItems}</ul>
}

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    deleteTodo: PropTypes.func.isRequired,
}


class ToDoForm extends Component {

    static propTypes = {
        onAdd: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {value: ""};
        this.onTodoChange = this.onTodoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTodoChange(event){
        this.setState({value: event.target.value});
    }

    onSubmit(event){
        this.props.onAdd(this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div className="add-todos">
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onTodoChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

class App extends Component {

    todoCounter = 6;

    constructor(props){
        super(props);
        this.state = {todoItems: TODOS};
        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    onTodoAdd(value){
        this.state.todoItems.push({
            id:this.todoCounter++,
            todo: value,
        });
        this.setState(this.state);
    }

    deleteTodo(id){
        this.setState({
            todoItems: this.state.todoItems.filter(todo => todo.id !== id)
        });
    }

    render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>React ToDo List</h1>
          <ToDoForm onAdd={this.onTodoAdd} />
          <div className="todos">
            <TodoList
                todoItems={this.state.todoItems}
                deleteTodo={this.deleteTodo}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

