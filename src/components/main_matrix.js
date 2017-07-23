import React, { Component } from 'react';
import './main_matrix.css';
import Matrix from 'matrix';

class MainMatrix extends Component {
	constructor() {
	    super();
	    this.state={
	    	matrix:matrixArray(10,5)
	    }
	    this.matrix = {
	    	squares:matrixArray(10,5),
	    }
	    
	}

	render() {
		console.log(this)
		var squares = [];
		this.matrix.squares.forEach(function(array,i){
			array.forEach(function(square,j){
				squares.push(<Square value={square.value} key_i={i} key_j={j} is_broke={i==4} key={i+"|"+j}/>);

			})
			
		})
	    return (
	     	<div className="matrix">
	     		<Matrix squareSize={20} matrix={this.state.matrix} />
	     		<table>
	     			{squares}
	     		</table>
	     	</div>
	    );
	}


	onSquareChange(){
		console.log("changed")
	}
}

class Square extends Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}
	render() {
		console.log(this.props.is_broke)
		if (this.props.is_broke){
	    	return (
	    		<lastInput>
		    		<input className="square" value={this.state.value} onChange={this.handleChange}/>
		    		<br />
		    	</lastInput>
	    	);
	    }else{
    		return (
    			<input className="square" value={this.state.value} onChange={this.handleChange}/>
    		);
	    }
	     	   
	}
}


export default MainMatrix;

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<columns; i++){
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}