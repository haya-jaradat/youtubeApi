import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    const imageUrl = video.snippet.thumbnails.default.url;

        return (
         <li  onClick={() => onUserSelected(video)} className="list-group-item">
          <div className="video-list media">
           <div className="media-left">
            <img className="media-object" src={imageUrl} alt="no" />
               <span className="media-heading media-body"> {video.snippet.title} </span>
           </div>
          </div>
         </li>
            );
    
};
 
export default VideoListItem;