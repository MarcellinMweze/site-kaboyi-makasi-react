import React from "react";
import Devise from "../components/Devise";
import ReseauSociaux from "../components/ReseauSociaux";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AproposComp from "../components/AproposComp";
import BoutonTop from "../components/BoutonTop";
import AnimationPage from "../AnimationPage";

const Apropos = () => {
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
        <AproposComp />
        <div class="footer">
          <div className="section">
            <Footer />
            <BoutonTop page={"/apropos#top"} />
          </div>
        </div>
      </main>
    </AnimationPage>
  );
};

export default Apropos;
