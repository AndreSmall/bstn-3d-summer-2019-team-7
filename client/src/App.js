import React from 'react';
import './App.css';
import Iframe from 'react-iframe'
import Graph from '../src/Graph/Graph';
import Blog from './components/Blog/Blog';
import TopVideos from './components/TopVideos/TopVideos';



class App extends React.Component {
  render() {

  
  return (
    <>
    <Blog />
    <div className="graph-box">
      
      <Graph />
      
    </div>
    
    <TopVideos />
    </>
  );
}}

export default App;
