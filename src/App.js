import React from 'react';
import logo from './logo.svg';
import './App.css';
import {v4 as uuid} from 'uuid';
import ListComponent from './ListComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      input: '',
      isClicked: false,
    };
  }
  

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputText = event => {
    this.setState({input: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      name: this.state.input,
      completed: false,
    }
    this.setState({
      items : [...this.state.items, newTodo],
      input: '',
      isClicked: true,
    })
  }


  onDelete = (id) => {
    const updatedTodos = this.state.items.filter(item => item.id !== id);
    this.setState({
      items : updatedTodos
    })
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={this.addTodo}>
          <input value={this.state.input} 
          onChange={this.inputText}
          placeholder= 'New to-do here' />
        <button> Submit </button>
        </form>
      <div>
        < ListComponent items={this.state.items} onDelete={this.onDelete}/>
      </div>
      </header>
    </div>
  );
 }
}

export default App;