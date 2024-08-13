import React from "react";
import Navigation from "./Navigation";

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
            <i class="fa-solid fa-mobile-screen"></i>+243990892295
          </p>
          <p>
            <i class="fa-solid fa-globe"></i>www.kaboyimakasi.com
          </p>
          <div class="entete-droite">
            <span class="icone">
              <a
                href="https://vm.tiktok.com/ZMrgXs64V/"
                target="_blank"
                rel="noopener nonef noreferrer"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </span>
            <span class="icone">
              <a
                href="https://www.instagram.com/kme_kaboyimakasiengineering?igsh=MXYwZmxjbDhnZ3cxZg=="
                target="_blank"
                rel="noopener nonef noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </span>
            <span class="icone">
              <a
                href="https://www.facebook.com/profile.php?id=61562930409607"
                target="_blank"
                rel="noopener nonef noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </span>
            <span class="icone">
              <a
                href="https://wa.me/995400220?test=Je peux vous aider ?"
                target="_blank"
                rel="noopener nonef noreferrer"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
