import BackToTop from "../backToTop";
import ContactPage from "./index";

export const metadata = {
  title: "Contact - Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

const ContactLayout = () => {
  return (
    <>
      <ContactPage />
      <BackToTop />
    </>
  );
};

export default ContactLayout;
