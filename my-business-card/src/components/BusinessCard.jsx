import React from 'react';
import './BusinessCard.css';


function BusinessCard() {
    return (
        <div className="business-card">
            <h3 className='About'>About</h3>
            <p>I am a rising sophomore in the Frederick Honors College at Pitt, studying electrical engineering in the Swanson School. 
                As part of the development of the MVP for my ADHD study tool startup, I'm learning full stack coding in the summer of 2025. 
                This simple business card project is helping me learn how to create static websites with React and get comfortable with the JSX language. 
                Next I will learn Next.JS and TypeScript before beginnging to learn backend devleopment. Check my Github repositories in the footer to check my weekly progress logs!</p>
            <h3 className='Interests'>Interests</h3>
            <p>Some of my interests outside of engineering and entreprenuership include working out (which I take pretty seriously as I've lost 40 lbs this year), 
                playing pickleball, and exploring other academic fields such as finance and trading algorithims.</p>
        </div>
    )
}

export default BusinessCard; 