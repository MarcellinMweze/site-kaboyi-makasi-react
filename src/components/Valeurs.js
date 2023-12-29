import React from "react";
import batiment4 from "../assets/images/batiment4.jpg";
import Bouton from "./Bouton";

const Valeurs = () => {
  return (
    <div className="section-valeurs">
      <div className="contener-valeur">
        <div className="imgapropos">
          <img src={batiment4} alt="Photo d'une Station" />
        </div>
        <h4>Nos Valeurs</h4>
        <div className="valeur">
          <p>
            Les valeurs fondamentales de l'Entreprise KABOYI MAKASI ENGINEERING
            SARL définissent la manière dont nous devons agir en tant qu'un
            individu et en tant qu'une équipe de travail pour atteindre nos
            objectifs commerciaux.
          </p>
        </div>
        <Bouton apropos={"/apropos#top"} />
      </div>
    </div>
  );
};

export default Valeurs;
