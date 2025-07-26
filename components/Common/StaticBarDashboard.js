import React from "react";
import Form from "./Form";

const StaticbarDashboard = () => {
  return (
    <>
      <div className="rbt-static-bar">
        <Form />

        <p className="b3 small-text">
          Prospero peut faire des erreurs. Veuillez vérifier les informations importantes.
        </p>
      </div>
    </>
  );
};

export default StaticbarDashboard;
