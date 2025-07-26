import BackToTop from "../backToTop";
import PrivacyPolicyPage from "./index";

export const metadata = {
  title: "Politique de confidentialité - || Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

const PrivacyPolicyLayout = () => {
  return (
    <>
      <PrivacyPolicyPage />
      <BackToTop />
    </>
  );
};

export default PrivacyPolicyLayout;
