"use client";

import Context from "@/context/Context";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const TermsPolicyPage = () => {
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

          <PrivacyPolicy />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
