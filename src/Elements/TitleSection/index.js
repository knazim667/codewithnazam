import React from "react";
import "./titleSection.css";

const TitleSection = ({ title, span, titleBg }) => {
  return (
    <section className="title-section">
      <h1>
        {title} <span className="title-span">{span}</span>{" "}
      </h1>
      <span className="title-bg">{titleBg}</span>
    </section>
  );
};

export default TitleSection;
