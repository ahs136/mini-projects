import React from 'react';
import './Card.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt={props.item.title} className="card-img" />
            <div className="card-content">
                <div className="location-info">
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="country">{props.item.location}</span>
                    <a 
                        href={props.item.googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="maps-link"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    );
}

