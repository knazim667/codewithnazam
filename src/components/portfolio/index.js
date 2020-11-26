import React from "react";
import TitleSection from "../../Elements/TitleSection";
import "./portfolio.css";
import { PORTFOLIO } from "../../data";

const Portfolio = () => {
  return (
    <div>
      <TitleSection title="my portfolio" titleBg="works" />
      <section className="portfolio-content">
        <div className="container grid-gallery">
          <section className="grid-wrap">
            <div className="row works-item">
              {PORTFOLIO.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="item">
                    <div className="image">
                      <img src={item.img} alt="" />
                      <div
                        className="overlay"
                        style={{
                          left: 0,
                          top: 0,
                        }}
                      >
                        <a href={item.path} className="view-work">
                          {item.linkText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
