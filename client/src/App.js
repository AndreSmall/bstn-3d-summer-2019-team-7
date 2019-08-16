import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GraphCard from './components/GraphCard/GraphCard';
import Blog from './components/Blog/Blog';
import TopVideos from './components/TopVideos/TopVideos';



class App extends React.Component {
  render() {

  
  return (
  <>
    <Header />
    <Blog/>
    <div className='container'>    
    <GraphCard />
    <TopVideos/>
    </div>
    </>
  );
}}

export default App;
