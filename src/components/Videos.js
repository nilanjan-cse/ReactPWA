import React from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoDB from './VideosDB.json'
import Player from './Player';
function Videos() {
    // const ytubeUrl = "https://www.youtube.com/watch?v=d0A3zAXu4dU&list=PLGMVCsud2sqU2tzV1De6z1HhZgp-fIiX1";
    // const videoUrl = ytubeUrl.split("&")[0]
    var arr = [];
    Object.keys(VideoDB['videos']).forEach(function(key) {
      arr.push(VideoDB['videos'][key]);
    });
    console.log("ARR",arr);
  return (
    <div className="row">
        
            {
                arr.map(item =>
                    // let URL = ;
                    // <ReactPlayer key= {item.id} url={item.url.split("&")[0]} controls='true'/>
                    <Player key = {item.id} url={item.url.split("&")[0]} title={item.title}/>
                    
                )
                    
            }
            
    </div>
    
  )
}

export default Videos