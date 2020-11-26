import React from "react";
import "./titleSection.css";

const TitleSection = ({ title, titleBg }) => {
  return (
    <section className="title-section">
      <h1>{title}</h1>
      <span className="title-bg">{titleBg}</span>
    </section>
  );
};

export default TitleSection;
