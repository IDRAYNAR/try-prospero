"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

const Compare = ({ subTitle, title, postion, titleType }) => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <div className="rainbow-pricing-detailed-area mt--60">
      <div className="row">
        <div className="col-lg-12">
          <div
            className={`section-title text-${postion} mb--30`}
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            {subTitle ? (
              <h4 className="subtitle">
                <span className="theme-gradient">{subTitle}</span>
              </h4>
            ) : (
              ""
            )}
            {titleType ? (
              <h2 className="title w-600 mb--0">{title}</h2>
            ) : (
              <h3 className="title w-600 mb--0">{title}</h3>
            )}
          </div>
        </div>
      </div>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rainbow-compare-table style-1">
            <table className="table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th className="style-prymary">Basique</th>
                  <th className="style-prymary">Intermédiaire</th>
                  <th className="style-prymary sm-radius-top-right">
                    Avancé
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="heading-row">
                  <td>
                    <h6>Tarification</h6>
                  </td>
                  <td>
                    <h6>29€ / mois</h6>
                  </td>
                  <td>
                    <h6>79€ / mois</h6>
                  </td>
                  <td>
                    <h6>149€ / mois</h6>
                  </td>
                </tr>
                <tr>
                  <td>Coût Annuel</td>
                  <td>290€</td>
                  <td>790€</td>
                  <td>1490€</td>
                </tr>
                <tr className="heading-row">
                  <td>
                    <h6>Fonctionnalités</h6>
                  </td>
                  <td>
                    <h6>Inclus</h6>
                  </td>
                  <td>
                    <h6>Inclus</h6>
                  </td>
                  <td>
                    <h6>Inclus</h6>
                  </td>
                </tr>
                <tr>
                  <td>Accès aux outils de base</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Support technique standard</td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Accès à l'outil IA</td>
                  <td>30 analyses/mois</td>
                  <td>100 analyses/mois</td>
                  <td>Illimité</td>
                </tr>
                <tr>
                  <td>Fonctionnalités BETA</td>
                  <td>Accès limité</td>
                  <td>Accès étendu</td>
                  <td>Accès complet</td>
                </tr>
                <tr>
                  <td>Support technique prioritaire</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                  <td>
                    <span className="icon">
                      <i className="feather-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Partage de compte</td>
                  <td>1 utilisateur</td>
                  <td>5 utilisateurs</td>
                  <td>10 utilisateurs</td>
                </tr>
                <tr>
                  <td>Invitations gratuites</td>
                  <td>
                    <span className="icon bg-dark">
                      <i className="feather-x"></i>
                    </span>
                  </td>
                  <td>1 mois pour 1 personne</td>
                  <td>1 an pour 1 personne</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
