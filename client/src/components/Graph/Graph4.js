import React from 'react';
import tableau from 'tableau-api';

class Graph4 extends React.Component {



	componentDidMount() {
		this.initViz()
	}


	initViz() {
        const vizUrl = 'https://public.tableau.com/views/ActivismViewsoverTime/ActivismViewsoverTime?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link';
		const vizContainer = this.vizContainer;
		let viz = new window.tableau.Viz(vizContainer, vizUrl)
	}


	render() {
		return (
			<>



				<div ref={(div) => { this.vizContainer = div }}>
				</div>




			</>
		)
	}
}


export default Graph4;