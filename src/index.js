import _ from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDG6aX9ceyBuHGks2NTYFppcVxmmlBqfeE'

// Create a new component. This component should produce HTML
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }) // same as videos: videos
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 500)
    return ( <div>
               <SearchBar onSearchTermChange={videoSearch} />
               <VideoDetail video={this.state.selectedVideo} />
               <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
             </div>
    )
  }

}

// Take this component's generated HTML and put on page(in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'))
