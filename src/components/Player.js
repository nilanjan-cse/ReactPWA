import React from 'react'
import ReactPlayer from 'react-player/youtube'
function Player({key,url,title}) {
  return (
    <div className='column'>
        <div className='card'>
            <p>{title}</p>
            <ReactPlayer key= {key} url={url} controls='true' width={500} height={300}/>
        </div>
    </div>
  )
}

export default Player