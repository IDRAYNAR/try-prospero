import BackToTop from "../backToTop";
import PricingPage from "./index";

export const metadata = {
  title: "Tarifs - Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

const PricingLayout = () => {
  return (
    <>
      <PricingPage />
      <BackToTop />
    </>
  );
};

export default PricingLayout;
