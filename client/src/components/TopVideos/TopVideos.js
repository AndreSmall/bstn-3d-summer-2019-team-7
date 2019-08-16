import React from 'react';
import './TopVideos.scss';

class TopVideos extends React.Component {

    render() {
        return (
            <section className='videos'>
                <h1 className="videos__heading">Top Videos</h1>
                <div classname="videos__content">
                    <h3 className="videos__title">video title</h3>
                    <div>
                        <iframe className="videos__iframe" src="https://embed.ted.com/talks/daniel_finkel_can_you_solve_the_multiverse_rescue_mission_riddle" width="854" height="480"  frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                    <p className="videos__details">Text messaging, or texting, is the act of composing and sending electronic message</p>
                </div>
                <div classname="videos__content">
                    <h3 className="videos__title">video title</h3>
                    <div>
                        <iframe className="videos__iframe" src="https://embed.ted.com/talks/daniel_finkel_can_you_solve_the_multiverse_rescue_mission_riddle" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                    <p className="videos__details">Text messaging, or texting, is the act of composing and sending electronic message</p>
                </div>
                <div classname="videos__content">
                    <h3 className="videos__title">video title</h3>
                    <div>
                        <iframe className="videos__iframe" src="https://embed.ted.com/talks/daniel_finkel_can_you_solve_the_multiverse_rescue_mission_riddle" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                    <p className="videos__details">Text messaging, or texting, is the act of composing and sending electronic message</p>
                </div>
                <div classname="videos__content">
                    <h3 className="videos__title">video title</h3>
                    <div>
                        <iframe className="videos__iframe" src="https://embed.ted.com/talks/daniel_finkel_can_you_solve_the_multiverse_rescue_mission_riddle" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                    <p className="videos__details">Text messaging, or texting, is the act of composing and sending electronic message</p>
                </div>
            </section>
        )
    }
}

export default TopVideos;