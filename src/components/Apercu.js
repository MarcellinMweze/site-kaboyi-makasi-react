import React from "react";
import batiment5 from "../assets/images/batiment2.jpg";

const Apercu = () => {
  return (
    <div className="apercu">
      <div className="section">
        <h1>Bienvenue à l'Entreprise KME</h1>
        <div className="contener-apercu">
          <div className="contener-apercu">
            <div className="apercu">
              <p>
                L'entreprise KABOYI MAKASI ENGINEERING SARL est une entreprise
                de construction dédiée à tous types de travaux publics tel que
                les travaux routiers, le terrassement, les études topographiques
                et géotechniques, le génie civil, les travaux de nettoyages
                (cleaning), l'hydraulique, les bâtiments, l'électricité, les
                ponts et chaussées, la protection de l'environnement,
                l'approvisionnement en eau potable et assainissement,
                l'hurbanisme et aménagement du territoire, etc
              </p>
              <p>
                Elle est également dédiée à tous les services liés directement
                ou indirectement à la construction et à la fourniture
                d'équipement et des matériaux de construction.
              </p>
            </div>
            <div className="imgapropos">
              <img src={batiment5} alt="Photo d'une Maison" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apercu;
