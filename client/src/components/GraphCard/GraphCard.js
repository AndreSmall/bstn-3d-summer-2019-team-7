import React from 'react';
import Graph1 from '../Graph/Graph1.js';
import Graph2 from '../Graph/Graph2.js';
import Graph3 from '../Graph/Graph3.js';
import '../GraphCard/GraphCard.scss'

class GraphCard extends React.Component {
  render() {
    return (
      <div>
        <>
          <div className='graph-wrapper'>

          <div className='g1-box'>
            <Graph1 className='graph1' />
            <div className='summary1'>
              Placeholder
            </div>
            </div>

            <div className='g2-box'>
            <div className='summary2'>
              Placeholder
            </div> */}
            <Graph2 className='graph2'/>
            </div>

            <div className='g3-box'>
             <Graph3 className='graph3' />
            <div className='summary3'>
              Placeholder
            </div> 
            </div>

          </div>

        </>
      </div>
    );
  }
}

export default GraphCard;