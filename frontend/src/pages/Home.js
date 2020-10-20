import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import HomePageContainer from "../components/HomePageContainer";
import "../css/BasicStyles.css";

export const Home = () => (
  <HomePageContainer>
    <div>
      <h4>Hello.</h4>
      <h2>Are You 21+?</h2>
      <Button class="oval-button" variant='contained' href='/find'>
        Yes
      </Button>
    </div>
  </HomePageContainer>
);
