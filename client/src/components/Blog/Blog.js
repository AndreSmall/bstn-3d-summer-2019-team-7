import React from 'react';
import './blog.scss';
import hero from '../../hero.png';

class Blog extends React.Component {
    render () {
        return (
            <div className="blog"> 
                <div className="blog__left">
                    <h1 className="blog__title">Title</h1>
                    <p className="blog__details">Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. </p>
                </div>
                <div className="blog__right">
                    <img className="blog__image" src={hero} alt=""/>
                </div>

            </div>
        )
    }
}

export default Blog;