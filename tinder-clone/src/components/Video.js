import React, { useRef, useState } from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({ url, channel, description, song, likes, messages, shares }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // if video is playing, stop it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)

        }
        // stop it
        else {
            videoRef.current.play();
            setPlaying(true)

        }

        // otherwise, play it
    }
    return (
        <div className='video'>
            <ReactPlayer
                onClickPreview={handleVideoPress}
                ref={videoRef}
                loop={true}
                className='video__player'
                url={url}
                width="100%"
                height="100%"
            />

            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
