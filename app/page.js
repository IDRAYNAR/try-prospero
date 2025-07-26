import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Accueil - Prospero - Plateforme de gestion de données post-investissement",
  description: "Prospero - Plateforme de gestion de données post-investissement",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
