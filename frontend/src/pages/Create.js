import React, { Component } from "react";
import { PageContainer } from "../components/PageContainer";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  generateContent = () => {
    return <h2 style={{ color: "white" }}>Create Game</h2>;
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

export default Create;
