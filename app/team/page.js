import BackToTop from "../backToTop";
import TeamPage from "./index";

export const metadata = {
  title: "Notre équipe - || Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

const TeamLayout = () => {
  return (
    <>
      <TeamPage />
      <BackToTop />
    </>
  );
};

export default TeamLayout;
