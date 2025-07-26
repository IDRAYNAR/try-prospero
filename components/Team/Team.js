"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Sal from "sal.js";

import TeamData from "../../data/team.json";

const Team = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <>
      <div className="rbt-team-area bg-color-1 rainbow-section-gap-big pb--0">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Direction Prospero</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Les fondateurs
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--15 mt_dec--30">
            {TeamData &&
              TeamData.team.slice(0, 3).map((data, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={index}
                >
                  <div className="team">
                    <div className="thumbnail">
                      <Image
                        src={data.img}
                        width={400}
                        height={400}
                        style={{ aspectRatio: "1/1", objectFit: "cover" }}
                        alt="Images de l'équipe"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">{data.name}</h4>
                      <p className="designation">{data.profission}</p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a
                          href={data.linkedin}
                          target="_blank"
                          className="text-black bg-white"
                          style={{ borderRadius: "50%", padding: "5px 10px", width: "30px", height: "30px", border: "2px solid #3B71D6", cursor: "pointer" }}
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="rbt-team-area bg-color-1 rainbow-section-gap-big">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Staff Prospero</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  L'équipe technique
                </h2>
              </div>
            </div>
          </div>

          <div className="row row--15 mt_dec--30">
            {TeamData &&
              TeamData.team.slice(3, 9).map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                  <div className="rbt-team team-style-default style-three rbt-hover">
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={data.img}
                          width={400}
                          height={400}
                          style={{ aspectRatio: "1/1", objectFit: "cover" }}
                          alt="Modèle d'entreprise"
                        />
                        <div className="linkedin-icon" style={{ position: "absolute", top: "45px", right: "50px", zIndex: "1000" }}>
                          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in" style={{ textDecoration: "none", color: "white", fontSize: "16px" }}></i>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h2 className="title">{data.name}</h2>
                        <h6 className="subtitle">{data.profission}</h6>
                        <span className="team-form">
                          <i className="feather-map-pin"></i>
                          <span className="location">{data.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
