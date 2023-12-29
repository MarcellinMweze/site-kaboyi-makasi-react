import React from "react";
import batiment4 from "../assets/images/batiment3.jpg";
import Bouton from "./Bouton";

const Domaine = () => {
  return (
    <div className="section-domaine">
      <div className="imgapropos">
        <img src={batiment4} alt="Photo d'une Station" />
      </div>
      <h4>Ce que nous faisons</h4>
      <div className="faire">
        <p>
          Génie Civil et Construction
          <br></br>Projets d'installations industrielles et électriques
          <br></br>
          Travaux d'alimentation, de distribution et traitement des eaux
        </p>
      </div>
      <Bouton apropos={"/apropos#top"} />
    </div>
  );
};

export default Domaine;
