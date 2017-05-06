import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyACSuChL7bC53ADju14Rt-zvKmRt07dMJo';


  YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
  });

//create a new component. This should produce some HTML
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

 //take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
