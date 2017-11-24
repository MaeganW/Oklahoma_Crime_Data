import React, { Component } from 'react';
import Header from './components/header.component';
import Chart from './components/chart.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Chart/>
      </div>
    );
  }
}

export default App;
