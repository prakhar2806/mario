import React, { Component } from 'react';
import './App.css';
import Grid from './Grid'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: null,
      column: null,
      showChild: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reRenderGrid = this.reRenderGrid.bind(this);
  }
  handleSubmit() {
    let rowCount = document.getElementById("row").value;
    let columnCount = document.getElementById("column").value;
    this.setState({
      row: rowCount,
      column: columnCount,
    })
    this.setState({ showChild: true });
  }

  reRenderGrid() {
    this.setState({ rows: 0, column: 0 });
    this.setState({ showChild: false });
  }


  render() {
    const inputstyle = {
      width: '40%',
    }
    const btnStyle = {
      width: '200px',
      float: 'left'
    }

    const childElement = this.state.showChild ? <Grid row={this.state.row} column={this.state.column} /> : null;

    return (
      <div className="App">
        <input type="text" id="row" placeholder="Enter number of Rows" className="form-control form-control-lg" onChange={this.reRenderGrid} style={inputstyle} />
        <br />
        <input type="text" id="column" placeholder="Enter number of Columns" className="form-control form-control-lg" onChange={this.reRenderGrid} style={inputstyle} />
        <br />
        <button onClick={this.handleSubmit} className="btn btn-primary" style={btnStyle}>submit</button>
        <br />
        {childElement}
      </div>
    );
  }
}

export default App;
