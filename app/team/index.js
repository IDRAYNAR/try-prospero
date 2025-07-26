"use client";

import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Team from "@/components/Team/Team";

const TeamPage = () => {
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
          <Breadcrumb title="L'équipe" text="Notre équipe" />

          <Team />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default TeamPage;
