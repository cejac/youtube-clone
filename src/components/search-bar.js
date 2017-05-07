import React, { Component } from 'react';

//functional component = function: what we usually se
//class based component using es6 class = JS object with properties and values

class SearchBar extends  Component{ //class named SearchBAr and ive it all access to react coponents
constructor(props){
  super(props);

  this.state = {term: ''}; //whenever we want to update the component think of state
}

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
