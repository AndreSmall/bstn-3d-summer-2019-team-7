import React from 'react';
import './blog.scss';
import hero from '../../hero.png';

class Blog extends React.Component {
    render () {
        return (
            <div className="blog"> 
                <div className="blog__left">
                    <h1 className="blog__title">Influencer content inspired by real life</h1>
                    <p className="blog__details">At Instaconnected, we thoughtfully curate essential influencer content related to activism, business, culture and art.  Choose your path today to make your impact tomorrow. </p>
                </div>
                <div className="blog__right">
                    <img className="blog__image" src={hero} alt=""/>
                </div>

            </div>
        )
    }
}

export default Blog;