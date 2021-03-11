import React from "react";
import PageWrapper from "../pageWrapper";
import "./404.css";
const PageNotfound = () => {
  return (
    <PageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="not-found">404</h1>
            <p className="para">Page not Found</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PageNotfound;
