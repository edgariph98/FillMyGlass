import React from "react";
import Button from "@material-ui/core/Button";
import HomePageContainer from "../components/HomePageContainer";
import "../css/BasicStyles.css";

export const Home = () => (
  <HomePageContainer>
    <div>
      <h4>You must be of legal drinking age to access this Site. <br></br>
      Fill My Cup does not sell or serve alcohol to persons under the age of 21.<br></br>
      By accessing Fill My Cup Site, you swear and affirm that you are over the age of 21.</h4>
      <h2>Are You 21+?</h2>
      <Button class="oval-button" variant='contained' href='/find'>
        Yes
      </Button>
    </div>
  </HomePageContainer>
);
