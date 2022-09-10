
import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";

function Video(props) {
  const [playing,setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
     if(playing){
      videoRef.current.pause();
      setPlaying(false);
     }else{
      videoRef.current.play();
      setPlaying(true);
     }
  }

  return (
    <div className="video">
        <video 
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src={props.url}>

        </video>

        <VideoFooter name={props.name} description={props.description} songs ={props.song}/>
        <VideoSidebar likes={props.likes} messages={props.messages} shares={props.shares} />
    
    </div>
  )
}

export default Video