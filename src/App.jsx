import news_feed from './sample_news_stories.json';
import StoryCard from './components/storyCard';
import NewsFeed from './components/NewsFeed';
import './index.css';

function App() {


  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <NewsFeed />
    </div>
  );
}

export default App;
