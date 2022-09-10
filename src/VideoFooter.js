import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter(props) {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
            <h3>@{props.name}</h3>
            <p>{props.description}</p>
           <div className="videoFooter__ticker">
            <MusicNoteIcon 
            className="videoFooter__icon" />
            <Ticker>
                {({ index }) => (
                    <>
                        <p>{props.songs}</p>  
                    </>
                )}
             </Ticker>
        </div>
      </div> 

      
      <img className="videoFooter__recorder" src='https://static.thenounproject.com/png/934821-200.png' /> 



    </div>
  );
}

export default VideoFooter