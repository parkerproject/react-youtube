import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video
  const imageUrl = video.snippet.thumbnails.default.url
  const fx = () => onVideoSelect(video) // () => foo()

  return (
  <li onClick={fx} className='list-group-item'>
    <div className='video-list-media'>
      <div className='media-left'>
        <img className='media-object' src={imageUrl} />
      </div>
      <div className='media-body'>
        <div className='media-heading'>
          {video.snippet.title}
        </div>
      </div>
    </div>
  </li>
  )
}

export default VideoListItem
