import React from "react";
import "./404.css";
const PageNotfound = () => {
  return (
    <div className="pagenotfound">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="not-found">404</h1>
                <p className="para">Page not Found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotfound;
