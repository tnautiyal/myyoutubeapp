import React from 'react';

class SearchBar extends React.Component{

  state = {term:''};

  onInputChange = (event) =>{
    this.setState({term: event.target.value});

  }; //make Event callbacks as arrow functions

  onFormSubmit = (event) => {
    event.preventDefault();

    //TODO: make sure we call callback from parent components
    this.props.onFormSubmit(this.state.term);
  }; //make Event callbacks as arrow functions to avoid 'this' problems

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
