import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { Select, Input, Button } from "antd";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"
import "../css/App.css";

class GameDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {
        "game-name": "",
        players: "",
        description: "",
        "media-name": "",
        "media-type": "",
        url: "",
      },
    };
  }

  componentDidMount = () => {
    const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));
    this.setState({ game: selectedGame });
  };

  generateContent = () => {
    const { game } = this.state;
    return (
      <div style={{ margin: "0 auto", color: "white", textAlign: "center", width: "50%" }}>
        <div style={{ margin: "1% 0%" }}>
          <h1 style={{ color: "white" }}>{game["game-name"]}</h1>
        </div>

        <div>Minimum Number of Players: {game["players"]}</div>

        <div style={{ margin: "3% 0%" }}>
          <h2 style={{ color: "white" }}>How To Play</h2>
          {game["description"]}
        </div>

        {game["url"] !== "None" && <div>{game["url"]}</div>}
        {game["url"] !== "None" && <div><ReactPlayer width="100%" url={game["url"]}/></div>}

        <div style={{ margin: "3% 0%" }}>
          <Link to='/find'>
            <Button>Back to Find Games</Button>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    const content = this.generateContent();
    return (
      <div>
        <PageContainer content={content} />
      </div>
    );
  }
}

export default GameDetails;
