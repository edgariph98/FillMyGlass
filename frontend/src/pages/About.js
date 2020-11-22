import React from "react";
import { PageContainer } from "../components/PageContainer";

const generateContent = () => {
  return (
    <div style={{ margin: "5% 30% 0% 30%"}}>
      <h2 style={{ color: "white" }}>What is Fill My Glass?</h2>
      <p style={{ color: "white" }}>
      Fill My Glass is a website created by college students at Texas A&M University.
      This was a project launched in a upper level computer science class called "Computers and New Media."
      Students were given a choice to pursue various passion projects and other interesting ideas in a semester long assignment.
      This is the result of a five member team: Edgar Portales, Ross Young, Adam Castell, Alicia Yong, and Alyssa Dang.
      The database and code for this website was collected and compiled by these students.
      </p>
      <h2 style={{ color: "white" }}>Disclaimer:</h2>
      <p style={{ color: "white" }}>
      This is a novelty website for adults ages 21 and over. We do not have any legal responsibilities for users using this website
      and we are not responsible for any injuries associate with its usage. Please drink responsibly.
      </p>
    </div>
  );
};

export const About = () => {
  const content = generateContent();
  return (
    <div className='find'>
      <PageContainer content={content} />
    </div>
  );
};
