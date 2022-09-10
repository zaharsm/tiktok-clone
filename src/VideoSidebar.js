import React, { useState } from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar(props) {
  const [liked,setLiked] = useState(false);

  function clicked(){
    setLiked(true);
  }

  function unclicked(){
    setLiked(false);
  }

  return (
    <div className='videoSidebar'>
        <div className="videoSidebar__button">
        {liked ? (<FavoriteIcon onClick={unclicked} fontSize='large' /> )  : (<FavoriteBorderIcon onClick={clicked} fontSize='large' /> )}
          <p>{liked ? props.likes + 1 : props.likes}</p>
        </div>

        <div className="videoSidebar__button">
          <MessageIcon fontSize='large' />
         <p>{props.messages}</p>
        </div>

        <div className="videoSidebar__button">
           <ShareIcon  fontSize='large' />
        <p>{props.shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar