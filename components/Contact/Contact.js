import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">Posez-nous vos questions</h3>

                  <div className="profile-details-tab">
                    <div className="advance-tab-button">
                      <ul
                        className="nav nav-tabs tab-button-style-2 justify-content-start"
                        id="settinsTab-4"
                        role="tablist"
                      >
                        <li role="presentation">
                          <a
                            className="tab-button active"
                            id="image-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#image-genarator"
                            role="tab"
                            aria-controls="image-genarator"
                            aria-selected="true"
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="title">Tarifs</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="tab-button"
                            id="photo-editor-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#photo-editor"
                            role="tab"
                            aria-controls="photo-editor"
                            aria-selected="true"
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="title">Technique</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="tab-button"
                            id="email-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#email-genarator"
                            role="tab"
                            aria-controls="email-genarator"
                            aria-selected="true"
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="title">Commerciale</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="tab-button"
                            id="code-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#code-genarator"
                            role="tab"
                            aria-controls="code-genarator"
                            aria-selected="true"
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="title">Sécurité</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="image-genarator"
                        role="tabpanel"
                        aria-labelledby="image-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="photo-editor"
                        role="tabpanel"
                        aria-labelledby="photo-editor-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="email-genarator"
                        role="tabpanel"
                        aria-labelledby="email-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="code-genarator"
                        role="tabpanel"
                        aria-labelledby="code-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Adresse</h4>
                    <p className="b2">
                      47 Bd de Pesaro, 92000 Nanterre, France
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-headphones"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Numéro de téléphone</h4>
                    <p className="b2">
                      <Link href="tel:+33600000000">+33 6 00 00 00 00</Link>
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Adresse email</h4>
                    <p className="b2">
                      <Link href="mailto:admin@gmail.com">
                        contact@prospero.fr
                      </Link>
                    </p>
                  </div>
                </div>
              <div className="rainbow-address">
                <div className="icon">
                  <i className="fa-sharp fa-regular fa-clock"></i>
                </div>
                <div className="inner">
                  <h4 className="title">Horaires d'appel</h4>
                  <table className="b2">
                    <tbody>
                      <tr>
                        <td>Lundi - Vendredi:</td>
                        <td>09:00 - 18:00</td>
                      </tr>
                      <tr>
                        <td>Samedi:</td>
                        <td>10:00 - 14:00</td>
                      </tr>
                      <tr>
                        <td>Dimanche:</td>
                        <td>Fermé</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
