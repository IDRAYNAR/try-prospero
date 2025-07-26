"use client";

import Context from "@/context/Context";
import Informations from "@/components/Informations/Informations";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";

const InformationsPage = () => {
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
          <Breadcrumb title="Quelques informations sur Prospero" text="Informations" />

          <Informations />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default InformationsPage;
