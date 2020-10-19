import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { getAllGames } from "../utils/routes";
import Card from "@material-ui/core/Card";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "../css/App.css";

const theme = {
  margin: "0 auto",
  textAlign: "center",
  color: "black",
};

class Find extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    this.getGames();
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  getGames = () => {
    getAllGames()
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.Response === 200) {
          this.updateState("games", resp.games);
        }
      });
  };

  generateContent = () => {
    const { games } = this.state;
    return (
      <>
        <div>
          {/* This font is imported from google fonts. The css file it is imported in is App.css. */}
          <h2
            style={{
              fontSize: "75px",
              fontFamily: "Bungee Shade, cursive",
              color: "#F2CA80",
              textAlign: "center",
            }}>
            Fill My Glass
          </h2>

          {/*  This "form" element is not implemented yet. It is just a placeholder. */}
          <form style={{ textAlign: "center" }}>
            <p style={{ color: "white" }}> Search Drinking Games </p>
            <input type='text' style={{ width: "300px" }} />
            <input type='button' onclick='SearchForThis' value='Search' />
          </form>
        </div>

        <div style={{ margin: "5% 10%" }}>
          <GridList
            cellHeight={160}
            cols={3}
            className={{
              width: 500,
              height: 450,
            }}>
            {games.map((game, index) => (
              <GridListTile key={index} cols={1}>
                <Card>
                  <CardContent>
                    <Typography style={{ ...theme }}>
                      {game["game-name"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["description"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["media-name"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["media-type"]}
                    </Typography>
                    <Typography style={{ ...theme }}>
                      {game["players"]}
                    </Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </>
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

export default Find;
