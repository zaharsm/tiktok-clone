import Video from './Video';
import './App.css';
import { useEffect, useState } from 'react';
import axios from './axios';

function App() {

  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();

  }, []);
  

  return (
    <div className="app">
     <div className="app__videos">

     {videos.map(({url,name,songs,description,messages,likes,shares}) =>(
       <Video 
        url={url}
        description={description}
        songs={songs}
        likes={likes}
        messages={messages}
        shares={shares}
        name={name}
       />
     )
     )}
      
      {/* <Video url="videos/jelly.mp4" 
      name="ssssangha" 
      description="Wow Epic Mern stack tik tok" 
      songs ="99 problems to React JS"  
      likes={111} 
      messages={251} 
      shares={71}/>


<Video url="videos/drama.mp4" 
      name="qazi" 
      description="This is a new Drama" 
      songs ="new build for everyone"  
      likes={356} 
      messages={210} 
      shares={96}/> */}


      </div>

    </div>
  );
}

export default App;
