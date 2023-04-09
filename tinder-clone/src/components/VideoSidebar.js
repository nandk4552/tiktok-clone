import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">

                {liked ? (
                    <FavoriteIcon
                        fontSize='medium'
                        onClick={(e) => setLiked(false)}
                    />) : <FavoriteBorderIcon
                    fontSize='medium'
                    onClick={(e) => setLiked(true)}
                />

                }
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon
                    fontSize='medium'
                />
                <p>{messages}</p>

            </div>
            <div className="videoSidebar__button">
                <ShareIcon
                    fontSize='medium'
                />
                <p>{shares}</p>

            </div>


        </div>
    )
}

export default VideoSidebar
