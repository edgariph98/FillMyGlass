import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import HomePageContainer from "../components/HomePageContainer";

export const Home = () => (
  <HomePageContainer>
    <div>
      <h2>Are You 21+?</h2>
      <Button variant='contained'>
        <Link to='/find'>Yes</Link>
      </Button>
    </div>
  </HomePageContainer>
);
