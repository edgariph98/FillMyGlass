import React, { useEffect } from "react";
import "../css/App.css";

const theme = {
  margin: "0 auto",
  textAlign: "center",
  color: "white",
};

const HomePageContainer = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#121725";
  }, []);
  return (
    <div
      style={{
        ...theme,
      }}>
      <h2
        style={{
          fontSize: "75px",
          fontFamily: "Bungee Shade, cursive",
          color: "#F2CA80",
          textAlign: "center",
          margin: "5% 0% 2% 0%"
        }}>
        Fill My Glass
      </h2>
      {props.children}
    </div>
  );
};

export default HomePageContainer;
