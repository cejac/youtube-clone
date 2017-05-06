import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
const API_KEY = 'AIzaSyACSuChL7bC53ADju14Rt-zvKmRt07dMJo';


//create a new component. This should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      //this.setSate({videos:videos});
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

 //take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
