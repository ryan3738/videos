import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyBCHusKVj2eeJWklEMtrlX8prtKk5eqseQ";
class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        {/* Callback name "onFormSubmit" can be any term.
          Typical convention is to match it to the callback function name.
          In this case that is "onTermSubmit" */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
