import React from "react";
import Navigation from "./Navigation";
import BoutonTop from "./BoutonTop";

const Footer = () => {
  return (
    <main>
      <div class="contener-footer">
        <div class="expertise">
          <h3>Notre Expertise</h3>
          <p>
            Notre expertise est une compréhension approfondie des travaux de
            Génie Civil et des besoins géographiquement spécifiques; notre
            expérience et notre myriade de solution clients nous laissent dans
            une position unique pour devenir la première société de Génie Civil
            et de Construction de la région.
          </p>
        </div>
        <div class="aide">
          <h3>Aide</h3>
          <Navigation />
        </div>
        <div class="contact">
          <h3>Contact</h3>
          <p>
            <i class="fa-solid fa-house"></i>Entre 16 et 17ième Poteau, Route
            Kinsevere, Lubumbashi-RD Congo
          </p>
          <p>
            <i class="fa-solid fa-at"></i>
            km.engineeringsarl@kaboyimakasi.com
          </p>
          <p>
            <i class="fa-solid fa-mobile-screen"></i>+243990548021
          </p>
          <p>
            <i class="fa-solid fa-globe"></i>www.kaboyimakasi.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
