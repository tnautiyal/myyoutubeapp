import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  //props.videos has the videos
  const renderedList = videos.map((video)=>{
    return <VideoItem  key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;

  });

  return <div className="ui relaxes divided list">{renderedList}</div>;
};

export default VideoList;
