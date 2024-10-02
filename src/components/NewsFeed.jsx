import { React, useState, useEffect } from 'react';
import StoryCard from './storyCard';
import sampleNews from '../sample_news_stories.json';

function NewsFeed() {
    console.log(sampleNews);

    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchedStories = sampleNews.results;
        setStories(fetchedStories);
    }, []);

    const handleDelete = (index) => {
        const updatedStories = stories.filter((_, i) => i !== index);
        setStories(updatedStories);
    };

    return (
        <div className="newsFeed">
            {stories.map((story, index) => (
                <StoryCard
                    key={index}
                    title={story.title}
                    author={story.creator}
                    description={story.description}
                    image={story.image}
                    pubDate={story.pubDate}
                    link={story.link}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    );
}

export default NewsFeed;