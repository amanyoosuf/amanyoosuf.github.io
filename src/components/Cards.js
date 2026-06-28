import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div> 
            <div className='cards'>
                <h1>Engineering & Data Analytics Projects</h1>
                <div className="location">
                    <a href='https://github.com/yourusername' target="_blank" rel="noreferrer">
                        <p>Explore My GitHub Repository For More Work!</p>
                    </a>  
                </div>
                
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        
                        {/* FIRST ROW: CORE ACADEMIC & INNOVATION PROJECTS */}
                        <ul className='cards__items'>
                            <CardItem
                                src='./image-URIS.png' // Keep placeholder name or swap out later
                                text='Smart Grid State Estimation (URIS): Developing AI-driven models to optimize real-time state estimation for smarter, more resilient modern power grids.'
                                path='https://github.com/yourusername'
                            />
                            <CardItem
                                src='./glow-strips.png'
                                text='Glow-in-the-Dark Corridor Strips: A low-cost, zero-energy safety material solution engineered to optimize night-time navigation safety in student residences.'
                                path='https://github.com/yourusername'
                            />
                        </ul>

                        {/* SECOND ROW: ENGINEERING PLACEHOLDERS */}
                        <ul className='cards__items'>
                            <CardItem
                                src='./placeholder-circuit.jpg'
                                text='Electrical Systems Design: Placeholder card for custom electronics prototyping, IoT applications, or circuit design projects.'
                                path='https://github.com/yourusername'
                            />
                            <CardItem
                                src='./placeholder-analytics.jpg'
                                text='Artificial Intelligence & Data Analytics: Placeholder card for upcoming machine learning models, data exploration frameworks, or AIDA coursework highlights.'
                                path='https://github.com/yourusername'
                            />
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
