import React from 'react';
import Graph1 from '../Graph/Graph1.js';
import Graph2 from '../Graph/Graph2.js';
import Graph3 from '../Graph/Graph3.js';
import Graph4 from '../Graph/Graph4.js';
import Graph5 from '../Graph/Graph5.js';
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
This graph indicates the concepts which are spoken about most during TedX talks.
You can see business, culture, activism, and art lead the way.
We believe tapping into these popular concepts will increase influencers potential outreach and audience.
              </div>
            </div>

            <div className='fourbox'>

            <div className='g2-box'>
              <Graph2 className='graph2' />
            </div>

            <div className='g3-box'>
              <Graph3 className='graph3' />
            </div>

            <div className='g4-box'>
              <Graph4 className='graph4' />
            </div>

            <div className='g5-box'>
              <Graph5 className='graph5' />
            </div>

            <div className='foursummary'>
            Each of the graphs shown above indicate the total view count for each topic of interest per month. For example, videos with the category ‘Business’ have peak viewership in February, while we see slight peaks and troughs elsewhere.
            </div>

            </div>

            

            </div>

        

        </>
      </div>
    );
  }
}

export default GraphCard;