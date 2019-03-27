import React, { Component } from 'react';
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
    const inputstyle = {
      width: '40%',
    }
    const btnStyle = {
      width: '200px',
      float: 'left'
    }

    

    return (
      <div className="App">
        <input type="text" id="row" placeholder="Enter number of Rows" className="form-control form-control-lg" style={inputstyle} />
        <br />
        <input type="text" id="column" placeholder="Enter number of Columns" className="form-control form-control-lg" style={inputstyle} />
        <br />
        <button onClick={this.handleSubmit} className="btn btn-primary" style={btnStyle}>submit</button>
        <br />
        {this.state.row != null ?
          <Grid row={this.state.row} column={this.state.column} ></Grid>
          : ""}
      </div>
    );
  }
}

export default App;
