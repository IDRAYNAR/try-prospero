import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, text }) => {
  return (
    <>
      <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h3 className="title h3">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
