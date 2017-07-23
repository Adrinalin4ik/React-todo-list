import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/list';
// import MainMatrix from './components/main_matrix';

class App extends Component {
  constructor() {
	    super();
      // console.log(this)
	    this.state={
        lists:this.lists,
        todos:this.todos,
        add_todo_modal:"hidden-transition"
	    }

      this.addTodo = this.addTodo.bind(this);
      this.updateInputValue = this.updateInputValue.bind(this);
      this.setAddList = this.setAddList.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
	}

  lists = [
    {
      id:1,
      title:"Новое задание 1"
    },
    {
      id:2,
      title:"Новое задание 2"
    },
    {
      id:3,
      title:"Новое задание 3"
    }
  ]

  todos = [
    {
      todo_list_id:1,
      text:"Test 1",
      completed:false
    },
    {
      todo_list_id:1,
      text:"Test 2",
      completed:true
    },
    {
      todo_list_id:2,
      text:"Test 3",
      completed:false
    },
    {
      todo_list_id:2,
      text:"Test 4",
      completed:true
    },
    {
      todo_list_id:3,
      text:"Test 5",
      completed:false
    },
    {
      todo_list_id:3,
      text:"Test 6",
      completed:true
    }
  ]

  addTodo(e){
    console.log(this,e)
    if (this.state.newListId != null && this.state.newTodoText != null){
      this.state.todos.push(
        {
          todo_list_id:this.state.newListId,
          text:this.state.newTodoText,
          completed:false
        })
      this.setState(
        {
          value: null,
          add_todo_modal: "hidden-transition"
        });
    }else{
      alert("Не выбран список")
    }
  }

  updateInputValue(e){
    this.setState({newTodoText: e.target.value});
  }

  setAddList(e){
    console.log(e.target.value)
    this.setState({newListId: e.target.value});
  }

  showModal(e){
    this.setState({add_todo_modal: ""});
  }

  hideModal(e){
    this.setState({add_todo_modal: "hidden-transition"});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todos</h2>
          <a href="javascript:;" className="add-todo" onClick={this.showModal}>+</a>
        </div>
        <div className="new-todo-modal" hidden={this.state.add_todo_modal}>
            <div className="modal-ovarlay"></div>
            <div className="form">
              <div className="inner">
                <h1 className="title">New Todo</h1>
                <select onChange={this.setAddList}>
                  <option>Выберите список</option>
                  {
                    this.state.lists.map((x) => {
                      return (
                        <option value={x.id}>{x.title}</option>
                      )
                    })
                  }
                </select>
                <input className="todo-text" type="text" value={this.state.newTodoText} onChange={this.updateInputValue} placeholder="Enter text"/>
                <a href="javascript:;" className="add-todo-btn" onClick={this.addTodo}>Add</a>
                <a href="javascript:;" className="cancel-btn" onClick={this.hideModal}>Cancel</a>
              </div>
            </div>
        </div>
        <div className="content">
          <List lists={this.state.lists} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
