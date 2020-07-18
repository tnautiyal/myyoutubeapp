import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAVaPQwr6jMsh3FvDvQ4SsAP9Gq22Y-GHM';

class App extends React.Component{

  state = { videos:[],
    selectedVideo: null
  };

  componentDidMount(){
    this.onTermSubmit('jim pranks dwight');
  }

  onTermSubmit= async term =>{
    const response = await youtube.get('/search',{
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY

      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {

      this.setState({selectedVideo: video});
  };

  render(){
    return(
      <div style={{ backgroundColor: 'black'}}>
      <div className="ui container" >
        <img className="ui small image" src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Pornhub-style_YouTube_logo.png' alt='LOGO'/>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div></div>);
  }
}


//part: "snippet",


export default App;
