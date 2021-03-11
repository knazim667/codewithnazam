import React from "react";
import "./pageWrapper.css";

const PageWrapper = ({ children }) => {
  return (
    <div className="pageWrraper">
      <div className="d-table">
        <div className="d-table-cell">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
