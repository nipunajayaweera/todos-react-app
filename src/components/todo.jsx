import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todo: this.props.todo,
        done:{}
     }
    render() { 
        return ( 
            <div className="alert alert-primary">
                <input className="form-check-input" type="checkbox" value={this.props.todo.task} defaultChecked={this.props.todo.checked} onChange={this.handleChangeChk.bind(this)}/>
                <label className="form-check-label" style={this.state.done}>
                    {this.props.todo.task}
                </label>
            </div>
         );
    }

    handleChangeChk=event=>{
        if(event.target.checked){
            this.state.done = {'textDecoration': 'line-through'};
            this.props.todo.checked=false;
        }else{
            this.state.done = {};
            this.props.todo.checked=true;
        }
        this.setState(this.state.done);
    }
}
 
export default Todo;