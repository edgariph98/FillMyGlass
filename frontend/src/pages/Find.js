import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { getAllGames } from "../utils/routes";
import styles from "../App.css";
import "../App.css";

class Find extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
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
      .then((res) => res.text())
      .then((resp) => {
        console.log(resp);
        this.updateState("content", resp);
      });
  };

  generateContent = () =>
  {
    return (
      <div>

        {/* This font is imported from google fonts. The css file it is imported in is App.css. */}
        <h2 style={{fontSize: "75px", fontFamily: "Bungee Shade, cursive", color: "#F2CA80", textAlign: "center"}}>{this.state.content}</h2>

        {/*  This "form" element is not implemented yet. It is just a placeholder. */}
        <form style={{textAlign: "center"}}>
          <p style ={{color: "white"}}> Search Drinking Games </p>
          <input type="text" style={{width: "300px"}}/>
          <input type="button" onclick="SearchForThis" value="Search"/>
        </form>
        
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

export default Find;
