import React from 'react';
import Card from './components/Card';
import data from './data';
import './App.css';
import { FaGlobeAmericas } from 'react-icons/fa';

export default function App() {
    const cards = data.map(item => (
        <Card
            key={item.id}
            item={item}
        />
    ));
    
    return (
        <div className="app">
            <nav>
                <h1>
                    <FaGlobeAmericas style={{ marginRight: '8px' }} />
                    My Travel Journal
                </h1>
            </nav>
            <div className="cards-container">
                {cards}
            </div>
        </div>
    );
}