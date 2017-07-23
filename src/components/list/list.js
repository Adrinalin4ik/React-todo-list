import React, { Component } from 'react';
import './list.css';
import Todo from './todo/todo'

class List extends Component {

	render() {
    const listItems = this.props.lists.map((list) =>{
      let todos = this.props.todos.filter((todo) => {
        return todo.todo_list_id == list.id
      }).map((todo) => {
        return(
          <Todo text={todo.text} completed={todo.completed}/>
        )
      })
      return(
        <div className="list">
          <h3 className="title">{list.title}</h3>
          <ul>
            {todos}
          </ul>
        </div>
      )
    })

	    return (
          <div className="lists">
            {listItems}
          </div>
	    );
	}
}


export default List;
