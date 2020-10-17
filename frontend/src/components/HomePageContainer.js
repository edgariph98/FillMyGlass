import React, { useEffect } from "react";

const theme = {
  margin: "0 auto",
  textAlign: "center",
  width: "100vw",
  height: "100vh",
  color: "white",
};

const HomePageContainer = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#001a33";
  }, []);
  return (
    <div
      style={{
        ...theme,
      }}>
      {props.children}
    </div>
  );
};

export default HomePageContainer;
