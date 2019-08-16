import React from 'react';
import './App.css';
import Iframe from 'react-iframe'
import Graph from '../src/Graph/Graph';
import Blog from './components/Blog/Blog';



class App extends React.Component {
  render() {

  
  return (
    <div className="graph-box">
      <Blog/>
      <Graph />
    </div>
  );
}}

export default App;
