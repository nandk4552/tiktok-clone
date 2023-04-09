import './App.css';
import Video from './components/Video';
import React, { useEffect, useState } from 'react';
import axios from "./axios"

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/v2/posts');
        setVideos(response.data);
        return response

      } catch (error) {
        console.log(error);
      }

    };
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div className="app">

      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video
            // key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}

          />
        ))}

      </div>


    </div>
  );
}

export default App;
