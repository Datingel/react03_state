import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const img = this.state.working
      ? "https://www.screengeek.net/wp-content/uploads/2018/01/batman-dc-comics.jpg"
      : "https://www.pngkey.com/png/full/17-179316_pix-funny-pictures-batman-funny-face-png.png";
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={this.state.working ? "App-logo" : "App-logo-stop"}
            alt="logo"
          />
          <button onClick={this.handleClick} className="btn">
            Ambition vs. Reality
          </button>
          <Button image={img} />
        </header>
      </div>
    );
  }
}

export default App;
