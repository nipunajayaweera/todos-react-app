import React, { Component } from 'react';   
import Todo from '../components/todo';

class Todos extends Component {
    state = { 
        todos: this.props.todos,
        input:"",
        btnDisabled:true
     }
    render() { 
        return ( 
            <React.Fragment>
            <div className="col-md-3 m-2">
                <div className="card">
                    <div className="card-body">
                    <h3>My Todos</h3>
                    {this.state.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
                    <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)}/>
                    <button disabled={this.state.btnDisabled} className="btn btn-success" onClick={this.addTodo}>+</button>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }

    addTodo = ()=>{
        const todos = [...this.state.todos];
        const key = todos.length+1;
        todos.push(
            {
                id:key,
                checked:false,
                task:this.state.input
            }
        );
        this.state.input="";
        this.setState({todos});
    }

    handleChange=event=> {
        if(event.target.value){
            this.state.btnDisabled = false;
        }else{
            this.state.btnDisabled = true;
        }
        this.setState({input: event.target.value});
      }
}
 
export default Todos;