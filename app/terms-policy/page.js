import BackToTop from "../backToTop";
import TermsPolicyPage from "./index";

export const metadata = {
  title: "Conditions d'utilisation - || Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

const TermsPolicyLayout = () => {
  return (
    <>
      <TermsPolicyPage />
      <BackToTop />
    </>
  );
};

export default TermsPolicyLayout;
