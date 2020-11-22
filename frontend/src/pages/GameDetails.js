import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"
import ReactStars from "react-rating-stars-component";

import {
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
} from "react-share";
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
    const ratingChanged = (newRating) => {console.log(newRating);};

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

        <TwitterShareButton
          title={"I found this drinking game: " + game["game-name"] + " '" + game["description"] + "' at "}
          url={"http://FillMyGlass.com"}>
          <TwitterIcon size={32} round/>
        </TwitterShareButton>

        <FacebookShareButton
                url={"http://FillMyGlass.com"}
                quote={"I found this drinking game: " + game["game-name"] + " '" + game["description"] + "' at http://FillMyGlass.com"}>
                 <FacebookIcon size={32} round/>
        </FacebookShareButton>

        <div> Rate This Game: </div>

        {/* Star Rating Code - May Or May Not Remove Depending On Final Design*/}
        <div style={{ margin: "0% 0% 0% 43%" }}>
          <ReactStars count={5} onChange={ratingChanged} size={24} isHalf={true}
          char={'♛'}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          />
        </div>

        {game["url"] !== "None" && game["media-type"] === "Music" && <div><ReactPlayer width="100%" url={game["url"]}/></div>}

        <div style={{ margin: "3% 0%" }}>
          <Link to='/find'>
            <Button class="oval-button">Back to Find Games</Button>
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
