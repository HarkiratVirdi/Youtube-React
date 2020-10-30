import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    textinput: "",
  };

  onChanging = (e) => {
    this.setState({ textinput: e.target.value });
  };

  onSubmiting = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.textinput);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmiting}>
          <input
            className="Input"
            placeholder="Search a video"
            type="text"
            onChange={this.onChanging}
            value={this.state.textinput}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
