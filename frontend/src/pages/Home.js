import React from "react";
import Button from "@material-ui/core/Button";
import HomePageContainer from "../components/HomePageContainer";
import "../css/BasicStyles.css";

export const Home = () => (
  <HomePageContainer>
    <div>
      <h4 style={{color: "white"}}>You must be of legal drinking age to access this site. <br></br>
      Fill My Glass does not sell or serve alcohol to persons under the age of 21.<br></br>
      By accessing Fill My Glass, you swear and affirm that you are over the age of 21.</h4>
      <h1 style={{color: "white"}}>Are You 21 or Older?</h1>
      <Button class="oval-button" variant='contained' href='/find'>
        Yes
      </Button>
    </div>
  </HomePageContainer>
);
