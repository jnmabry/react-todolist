import React, { Component } from 'react';
import '../css/App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Todo from '../components/Todo'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'

class App extends Component {

    render() {
        return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route exact path="/" render={() => <Todo title="React ToDo List" />} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;

