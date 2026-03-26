import React from 'react';
import './video.scss';
function Video({ src }) {
  return (
    <video autoPlay loop muted className="video-responsive" src={`${src}`} />
  );
}

export default Video;
