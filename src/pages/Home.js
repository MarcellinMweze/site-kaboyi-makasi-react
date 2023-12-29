import React from "react";
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Apercu from "../components/Apercu";
import Vision from "../components/Vision";
import Valeurs from "../components/Valeurs";
import Domaine from "../components/Domaine";
import Footer from "../components/Footer";
import ReseauSociaux from "../components/ReseauSociaux";
import Devise from "../components/Devise";
import Logo from "../components/Logo";
import BoutonTop from "../components/BoutonTop";
import AnimationPage from "../AnimationPage";

const Home = () => {
  return (
    <AnimationPage>
      <main>
        <div className="entete">
          <div className="section entete">
            <Devise />
            <ReseauSociaux />
          </div>
        </div>
        <div className="navbar">
          <div className="section nav">
            <Logo />
            <Navigation />
          </div>
        </div>
        <Presentation />
        <Apercu />
        <div className="vision">
          <h2>Qui sommes nous</h2>
          <div className="contener-vision">
            <div className="sec">
              <p className="para">
                Nous reconnaissons que nos clients exigent de bons services, un
                produit de qualité et à un prix compétitif dans un délai limité.
              </p>
            </div>
            <div className="section">
              <Vision />
              <Valeurs />
              <Domaine />
            </div>
          </div>
        </div>
        <div class="footer">
          <div className="section">
            <Footer />
            <BoutonTop page={"/#top"} />
          </div>
        </div>
      </main>
    </AnimationPage>
  );
};

export default Home;
