import React from 'react';
import './App.css';
import Iframe from 'react-iframe'
import Graph from '../src/Graph/Graph'



class App extends React.Component {
  render() {

  
  return (
    <div className="graph-box">
     <Graph />
    </div>
  );
}}

export default App;
