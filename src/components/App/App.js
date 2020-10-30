import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./App.css";
import Youtube from "../../api/api";
import VideoList from "../VideoList/VideoList";

class App extends Component {
  state = {
    list: [],
    selectedVideo: null,
  };

  onFormSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ list: response.data.items });
    console.log(this.state.list);
  };

  onVideoSelection = (video) => {
    console.log("from the app", video);
  };

  render() {
    return (
      <div className="container">
        <h1 className="heading">YouTube</h1>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <VideoList
          onVideoSelection={this.onVideoSelection}
          noOfVideo={this.state.list}
        />
      </div>
    );
  }
}

export default App;
