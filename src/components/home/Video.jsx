// src/components/home/Video.jsx
import React from 'react';

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
       src="/vidoooo.mp4"
      />
    </div>
  )
}

export default Video;

