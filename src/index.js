import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "./SeasonDisplay.css";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }

  renderContent = () => {
    if (this.setState.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.setState.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  };

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
