import React from "react";
import { PageContainer } from "../components/PageContainer";

const generateContent = () => {
  return <h2 style={{ color: "white" }}>About</h2>;
};

export const About = () => {
  const content = generateContent();
  return (
    <div className='find'>
      <PageContainer content={content} />
    </div>
  );
};
