"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";

import playApp from "../../public/images/cta-img/play-app.png";
import appleApp from "../../public/images/cta-img/apple-app.png";
import viewImg from "../../public/images/cta-img/illustration-login-v2.png";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import bgLight from "../../public/images/bg/bg-shape-tree.png";

const CtaTwo = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="prospero-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Essayez dès maintenant
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--20">Prospero</h2>
                  <p className="description b1">
                    L'outil de gestion de portefeuille le plus complet
                    <br />
                    qui permet de suivre vos investissements facilement
                    <br />
                    et dynamiquement.
                  </p>
                </div>
                <div className="app-store-btn">
                  <Link className="btn-default btn-large" href="https://tryprospero.fr/" rel="noopener noreferrer">
                    Commencer
                    <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                  </Link>
                </div>
              </div>
              <div className="content-right">
                <div className="img-right">
                  <Image
                    src={viewImg}
                    width={449}
                    height={499}
                    style={{ borderRadius: "5px" }}
                    alt="Mobile View"
                  />
                </div>
              </div>
              <div className="bg-shape-one">
                <Image src={bgShape} width={639} height={404} alt="Bg shape" />
              </div>
            </div>
            <div className="bg-shape-inside">
              <Image src={bgLight} width={968} height={1103} alt="Bg shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
