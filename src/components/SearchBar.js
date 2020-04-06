import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
this.setState({ term: e.target.value })
  };

onFormSubmit = e => {
    //prevent default form submittal when user submits form or hits enter
    e.preventDefault();

    // TODO: Make sure well call
    // callback from parent component
}

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              //In line function to link text input to component state
              //onChange={e => this.setState({ term: e.target.value })}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
