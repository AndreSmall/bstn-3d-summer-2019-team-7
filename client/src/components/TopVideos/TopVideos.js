import React from 'react';
import './TopVideos.scss';

class TopVideos extends React.Component {

    render() {
        return (
            <section className='videos'>
                <h1 className="videos__heading">Thought leadership in action</h1>
                <div className="videos__box">
                    <div className="videos__content">
                        <h3 className="videos__title">Business</h3>
                        <div>
                            <iframe className="videos__iframe" src="https://embed.ted.com/talks/villy_wang_a_business_against_racism" frameborder="0" scrolling="no" allowfullscreen></iframe>
                        </div>
                        <p className="videos__details">Villy Wang is in the business of rewriting stereotypes, empowering youth of color to take back their narratives through storytelling. In this moving talk, Wang explains how she developed a program to train kids in filmmaking so they can create new, authentic stories and break the cycleof bias perpetuated in media.</p>
                    </div>
                    <div className="videos__content">
                        <h3 className="videos__title">Art</h3>
                        <div>
                            <iframe className="videos__iframe" src="https://embed.ted.com/talks/chris_bangle_says_great_cars_are_art" frameborder="0" scrolling="no" allowfullscreen></iframe>
                        </div>
                        <p className="videos__details">American designer Chris Bangle explains his philosophy that car design is an art form in its own right, with an entertaining -- and ultimately moving -- account of the BMW Group's Deep Blue project, intended to create the SUV of the future.</p>
                    </div>
                    <div className="videos__content">
                        <h3 className="videos__title">Culture</h3>
                        <div>
                            <iframe className="videos__iframe" src="https://embed.ted.com/talks/wale_oyejide_fashion_that_celebrates_african_strength_and_spirit" frameborder="0" scrolling="no" allowfullscreen></iframe>
                        </div>
                        <p className="videos__details">To be African is to be inspired by culture and to be filled with undying hope for the future," says designer and TED Fellow Walé Oyéjidé. With his label Ikiré Jones (you'll see their work in Marvel's "Black Panther"), he uses classic design to showcase the elegance and grace of often-marginalized groups, in beautifully cut clothing that tells a story.</p>
                    </div>
                    <div className="videos__content">
                        <h3 className="videos__title">Activism</h3>
                        <div>
                            <iframe className="videos__iframe" src="https://embed.ted.com/talks/sarah_corbett_activism_needs_introverts" frameborder="0" scrolling="no" allowfullscreen></iframe>
                        </div>
                        <p className="videos__details">For the introverts among us, traditional forms activism like marches, protests and door-to-door canvassing can be intimidating and stressful. Take it from Sarah Corbett, a former professional campaigner and self-proclaimed introvert. She introduces us to "craftivism," a quieter form of activism that uses handicrafts as a way to get people to slow down and think deeply about the issues they're facing, all while engaging the public more gently. Who says an embroidered handkerchief can't change the world?</p>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default TopVideos;