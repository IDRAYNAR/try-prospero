"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import PricingData from "../../data/pricing.json";

import bgShape from "../../public/images/bg/bg-shape-two.png";

import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Pricing from "@/components/Pricing/Pricing";
import BrandTwo from "@/components/Brands/Brand-Two";
import Compare from "@/components/Pricing/Compare";
import AccordionItem from "@/components/Accordion/AccordionItem";
import CtaTwo from "@/components/CallToActions/Cta-Two";

const PricingPage = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Plans tarifaires pour tous" text="Tarification" />

          <div className="rainbow-pricing-area rainbow-section-gap">
            <div className="container-fluid">
              <div className="wrapper rainbow-section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="section-title text-center"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="150"
                      >
                        <h4 className="subtitle">
                          <span className="theme-gradient">Tarification</span>
                        </h4>
                        <h2 className="title w-600 mb--20">
                          Votre parcours d'investissement augmenté commence ici
                        </h2>
                        <p className="description b1">
                          Utiliser prospero pour organiser votre porte feuille
                          d'investissements.
                        </p>
                      </div>
                      <nav className="prospero-tab">
                        <div
                          className="tab-btn-grp nav nav-tabs mb-3 text-center justify-content-center"
                          id="nav-tab"
                          role="tablist"
                        >
                          {PricingData &&
                            PricingData.pricing.map((data, index) => (
                              <button
                                className={`nav-link ${
                                  data.isSelect ? "active" : ""
                                }`}
                                id={`${data.priceId}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${data.priceId}`}
                                type="button"
                                role="tab"
                                aria-controls={data.priceId}
                                aria-selected="false"
                                key={index}
                              >
                                {data.priceType}{" "}
                                {data.discount ? (
                                  <span className="rainbow-badge-card badge-border">
                                    -{data.discount}%
                                  </span>
                                ) : (
                                  ""
                                )}
                              </button>
                            ))}
                        </div>
                      </nav>
                    </div>
                  </div>

                  <Pricing
                    parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--30"
                    start={0}
                    end={3}
                    isHeading={false}
                    isBadge={false}
                  />
                </div>
              </div>
            </div>

            <div className="rainbow-brand-area rainbow-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="section-title rating-title text-center sal-animate"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="100"
                    >
                      <div className="rating">
                        <a>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                      </div>
                      <p className="subtitle mb--0">
                        Basé sur un échantillon de 15 avis
                      </p>
                    </div>
                  </div>
                </div>
                <BrandTwo />
              </div>

              <div className="bg-shape-left">
                <Image
                  src={bgShape}
                  width={688}
                  height={1055}
                  alt="Forme de fond"
                />
              </div>
            </div>

            <div className="rainbow-pricing-detailed-area rainbow-section-gap">
              <div className="container">
                <Compare
                  titleType={true}
                  postion="center"
                  title="Comparez les plans et les fonctionnalités"
                  subTitle="Comparaison des prix"
                />
              </div>
            </div>

            <div className="rainbow-accordion-area rainbow-section-gap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-12 col-xl-4 col-12">
                    <div className="split-inner">
                      <h2
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="200"
                      >
                        Des questions ? Nous avons des réponses !
                      </h2>
                      <p
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="300"
                      >
                        Vous ne trouvez pas votre réponse ici ? Envoyez-nous
                        simplement un message pour toute question.
                      </p>
                      <div
                        className="contact-button mt--35 sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="400"
                      >
                        <Link
                          className="rainbow-gradient-btn without-shape"
                          target="_blank"
                          href="/contact"
                        >
                          <span>Contactez-nous</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-7 col-12">
                    <AccordionItem parentClass="rainbow-accordion-02" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
              <div className="container">
                <CtaTwo />
              </div>
            </div>
          </div>

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default PricingPage;
