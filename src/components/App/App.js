import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./App.css";
import VideoList from "../VideoList/VideoList";
import axios from "axios";
import VideoDetail from "../VideoDetail/VideoDetail";

class App extends Component {
  state = {
    list: [],
    maxResult: 5,
    selectedVideo: null,
  };

  componentDidMount() {
    this.onFormSubmit("Brad Traversy");
  }

  onFormSubmit = async (term) => {
    const response = await axios.get("/search", {
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        part: "snippet",
        maxResults: this.state.maxResult,
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: term,
      },
    });

    if (!response.data.items[0].thumbnails.url.height) {
      this.setState({
        list: response.data.items,
        selectedVideo: response.data.items[1],
      });
    } else {
      this.setState({
        list: response.data.items,
        selectedVideo: response.data.items[0],
      });
    }
    console.log(this.state.list);
  };

  onVideoSelection = (video) => {
    console.log("from the app", video);
    this.setState({ selectedVideo: video });
  };

  changeNum = (e) => {
    this.setState({ maxResult: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <h1 className="heading">YouTube</h1>
        <p className="displayNoVideo">
          Displaying
          <input
            type="text"
            onChange={this.changeNum}
            value={this.state.maxResult}
          />
          Videos
        </p>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <div className="flex-box">
          <VideoDetail className="Details" video={this.state.selectedVideo} />
          <VideoList
            onVideoSelection={this.onVideoSelection}
            noOfVideo={this.state.list}
          />
        </div>
      </div>
    );
  }
}

export default App;
