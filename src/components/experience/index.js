import React from "react";
import { Icon } from "react-icons-kit";
import "./experience.css";

const ExperienceEducation = ({ ExEd, icon }) => {
  return (
    <div className="col-lg-6">
      <div className="resume-box">
        <ul>
          {ExEd.map((ex) => (
            <li key={ex.id}>
              <div className="icon">
                <Icon icon={icon} size={15} className="breifcase_icon" />
              </div>
              <span className="time text-uppercase">{ex.date}</span>
              <h5 className="text-uppercase">
                {ex.role || ex.degree}
                <span className="place">{ex.company || ex.college}</span>
              </h5>
              <p>{ex.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceEducation;
