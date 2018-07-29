import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from '../src/components/todos';
import NavBar from '../src/components/navbar';

class App extends Component {
  state={
    todosList:[
      {
        id:1,
        todos:
        [
          {
              id:1,
              checked:false,
              task:"Task 1"
          },
          {
              id:2,
              checked:false,
              task:"Task 2"
          }
        ]
      }
  ]
  }
  render() {
    return (
      <div>
        <NavBar addCounters={this.addCounters}/>
        <div className="row">
          {this.state.todosList.map(tl => <Todos key={tl.id} todos={tl.todos} />)}
          
          <div>
                <button className="btn btn-primary" style={{'border-radius':'2rem','margin-top':'10px'}} onClick={this.addTodos}>+</button>
            </div>
        </div>
      </div>
    );
  }

  addTodos=()=>{
    const todosList = [...this.state.todosList];
    todosList.push(
      {
        id:todosList.length+1,
        todos:
        [
        ]
      }
    );
    this.setState({todosList});
  }
}

export default App;
