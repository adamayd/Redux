import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, index) => <Photo {...props} key={index} index={index} post={post} />)}
    </div>
  )
}

export default PhotoGrid;