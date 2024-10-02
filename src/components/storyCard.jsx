import React from 'react';
import '../storyCard.css';

function StoryCard({ title, description, image, pubDate, link, onDelete }) {
    console.log("Rendering StoryCard", title);


    return (
        <div className="mainContainer">
            <div className="colRight">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="authorAndDate">
                    <div className="authorAndDateText">
                        <p>{description}</p>
                        <p>{pubDate}</p>
                    </div>
                </div>
                <div className="link">
                    <a href={link}>Read More</a>
                </div>
            </div>
            <div className="colLeft">
                <div className="imageContainer">
                    <img src={image} alt="story image" />
                </div>
            </div>
            <div className="deleteButton">
                <button onClick={onDelete}>x</button>
            </div>
        </div>
    );
}

export default StoryCard;