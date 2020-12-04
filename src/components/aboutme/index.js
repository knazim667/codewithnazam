import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  ABOUT_ME,
  PERSONAL_ADD,
  PERSONAL_INFO,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
} from "../../data";
import Button from "../../Elements/Button";
import TitleSection from "../../Elements/TitleSection";
import Box from "../box";
import CircleProgressBar from "../circleProgressbar/circleProgress.styled";
import ExperienceEducation from "../experience";
import { briefcase } from "react-icons-kit/fa/briefcase";
import { graduationCap } from "react-icons-kit/fa/graduationCap";

import "./aboutme.css";

const AboutMe = () => {
  const [exdata, setExdata] = useState([]);
  const [eddata, setEddata] = useState([]);

  useEffect(() => {
    setExdata(EXPERIENCE);
    setEddata(EDUCATION);
  }, []);

  return (
    <div>
      <TitleSection title="about" span="me" titleBg="resume" />
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-xl-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="custom-title">personal info</h3>
                </div>
                <div className="col-6">
                  <ul className="about-list">
                    {PERSONAL_INFO.map((item, index) => (
                      <li key={index}>
                        <span className="title">{item.label} : </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {item.content}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="about-list">
                    {PERSONAL_ADD.map((item, index) => (
                      <li key={index}>
                        <span className="title">{item.label} : </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                          {item.content}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 mt-3">
                  <Button classStyle="btn-about" title="Download cv" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-xl-6">
              <div className="row">
                {ABOUT_ME.map((item, index) => (
                  <Box
                    key={index}
                    label={item.label}
                    count={item.count}
                    span={item.span}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="seprator" />
          <div className="row">
            <div className="col-12">
              <h3 className="skills">My skills</h3>
            </div>
            {SKILLS.map((skill, index) => (
              <div key={index} className="col-6 col-md-3 mb-3 mb-sm-5">
                <CircleProgressBar
                  trailStrokeColor="#eee"
                  strokeColor="#4169e1"
                  percentage={skill.percentage}
                />
                <h6 className="skills-heading">{skill.label}</h6>
              </div>
            ))}
          </div>
          <hr className="seprator" />
          <div className="row">
            <div className="col-12">
              <h3 className="skills">experience & education</h3>
            </div>
            <ExperienceEducation ExEd={exdata} icon={briefcase} />
            <ExperienceEducation ExEd={eddata} icon={graduationCap} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
