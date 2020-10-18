import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";
import { getAllGames } from "../utils/routes";

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

  generateContent = () => {
    return <h2 style={{ color: "white" }}>{this.state.content}</h2>;
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
