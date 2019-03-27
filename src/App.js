import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: null,
      column: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let rowCount = document.getElementById("row").value;
    let columnCount = document.getElementById("column").value;
    this.setState({
      row: rowCount,
      column: columnCount
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" id="row" />
        <input type="text" id="column" />
        <button onClick={this.handleSubmit}>submit</button>
        <Grid row={this.state.row} column={this.state.column}></Grid>
      </div>
    );
  }
}

export default App;
