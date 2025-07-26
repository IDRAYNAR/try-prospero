import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="copyright-right text-center">
                <p className="copyright-text">
                  © 2024 - 2025{" "}
                  <span className="text-white">
                    Tous droits réservés par Prospero - Projet PIE.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
