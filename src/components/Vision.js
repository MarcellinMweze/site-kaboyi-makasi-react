import React from "react";
import batiment5 from "../assets/images/Hopital Kifita.jpg";
import Bouton from "./Bouton";

const Vision = () => {
  return (
    <div className="section-vision">
      <div className="contener-vision">
        <div className="imgapropos">
          <img src={batiment5} alt="Photo d'une Station" />
        </div>
        <h4>Notre Vision</h4>
        <div className="vision">
          <p>
            La vision de l'Entreprise KABOYI MAKASI ENGINEERING SARL est de
            devenir l'entreprise la plus réputée d'Afrique en générale et de la
            République Démocratique du Congo en particulier ; motivée par
            l'innovation, pour fournir le développement qui mène à la croissance
            durable pour les populations et l'économie de l'Afrique et de la RD
            Congo en particulier.
          </p>
        </div>
        <Bouton apropos={"/apropos#top"} />
      </div>
    </div>
  );
};

export default Vision;
