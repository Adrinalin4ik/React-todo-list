import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  constructor() {
	    super();
      console.log(this)
	    this.state={
        completed:false
	    }
      this.handleChangeCheck = this.handleChangeCheck.bind(this);
	}
  handleChangeCheck(e){
    // console.log(e)
		this.setState({completed: e.target.checked});
    // console.log(this)
	}

	render() {
    // console.log(this)
	    return (
        <li>
          <input type="checkbox" value={this.props.completed} defaultChecked={this.props.completed} onChange={this.handleChangeCheck}/>
          {this.props.text}
        </li>
	    );
	}

}

export default Todo;
