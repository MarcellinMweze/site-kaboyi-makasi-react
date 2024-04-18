import React from "react";
import Devise from "../components/Devise";
import ReseauSociaux from "../components/ReseauSociaux";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BoutonTop from "../components/BoutonTop";
import kifitahopital from "../assets/images/Hopital Kifita.jpg";
import kifitahopital2 from "../assets/images/hopital kifita exterieur.jpg";
import makomeno from "../assets/images/makomeno.jpg";
import hotelRift from "../assets/images/hotel-rift.jpg";
import appartementJumele from "../assets/images/Maison d'habitation kabula meshi.jpg";
import miniVilla from "../assets/images/villa-craa.jpg";
import universite from "../assets/images/universite-Aumonier.jpg";
import hotelRoger from "../assets/images/mr-roger-hotel.jpeg";
import camp from "../assets/images/camp-de-travailleurs.jpeg";
import AnimationPage from "../AnimationPage";
import kabulameshiPcr from "../assets/images/kabulameshi-pcr.jpg";
import drNoah from "../assets/images/dr-noah.jpeg";

const Projets = () => {
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
        <div className="container-projets">
          <div className="section">
            <h2>Certaines de nos réalisations</h2>
            <div className="card-container">
              <div className="projet-card">
                <img src={universite} alt="Université des Aumoniers" />
                <p>
                  <strong>Description du Projet : </strong>Construction d’une
                  Université pour les Aumôniers du Travail
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    Lac Kipopo coin Biayi Commune et Ville de Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={kifitahopital} alt="Hôpital Kifita" />
                <p>
                  <strong>Description du Projet : </strong>Construction d’un
                  hôpital financé par l’Entreprise Minière MMG pour le village
                  Kifita (Vu de l'intérieur).
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    Village Kifita sur la route Kinsevere à Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img
                  src={appartementJumele}
                  alt="Appartemant jumelé à Kabulameshi"
                />
                <p>
                  <strong>Description du Projet : </strong> Construction de deux
                  appartements jumelés.
                </p>
                <p>
                  <strong>Adresse : </strong>
                  <em>Kabulameshi à Lubumbashi en RD-Congo</em>
                </p>
              </div>
              <div className="projet-card">
                <img src={makomeno} alt="Appartement Makomeno" />
                <p>
                  <strong>Description du Projet : </strong>Construction de deux
                  appartements Jumelés.
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    Quartier Makutano, Commune et Ville de Lubumbashi en
                    RD-Congo.
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={kifitahopital2} alt="Hôpital Kifita" />
                <p>
                  <strong>Description du Projet : </strong>Construction d’un
                  hôpital financé par l’Entreprise Minière MMG pour le village
                  Kifita (Vu de l'extérieur).
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    Village Kifita sur la route Kinsevere à Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={kabulameshiPcr} alt="Maison Résidentielle" />
                <p>
                  <strong>Description du Projet : </strong> Construction d’une
                  maison résidentielle
                </p>
                <p>
                  <strong>Adresse : </strong>
                  <em>
                    Kabulameshi Mashinga, réference bureau PCR à Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={hotelRift} alt="Rift Hôtel" />
                <p>
                  <strong>Description du Projet : </strong> Construction d’un
                  Hôtel (Rift Congo).
                </p>
                <p>
                  <strong>Adresse : </strong>
                  <em>
                    Au croissement de route Likasi et Kasenga au quartier Joli
                    Site dans la Commune Annexe à lubumbashi en RD-Congo.
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={miniVilla} alt="Mini-Villa" />
                <p>
                  <strong>Description du Projet : </strong> Construction d’une
                  Mini-Villa
                </p>
                <p>
                  <strong>Adresse : </strong>
                  <em>Au niveau de Craa à Lubumbashi en RD-Congo</em>
                </p>
              </div>
              <div className="projet-card">
                <img src={drNoah} alt="Maison résidentielle" />
                <p>
                  <strong>Description du Projet : </strong>Construction d’une
                  maison résidentielle.
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    Avenue Fifi masuka, Quartier Joli Site à Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={hotelRoger} alt="Hôtel Mr Roger" />
                <p>
                  <strong>Description du Projet : </strong>Construction d’un
                  hôtel
                </p>
                <p>
                  <strong>Adresse :</strong>
                  <em>
                    n°5341 Avenue Boya dans la Ville et Commune de Lubumbashi en
                    RD-Congo
                  </em>
                </p>
              </div>
              <div className="projet-card">
                <img src={camp} alt="Camp de travailleurs" />
                <p>
                  <strong>Description du Projet : </strong> Construction d’un
                  Camp de Travailleurs
                </p>
                <p>
                  <strong>Adresse : </strong>
                  <em>A Fungurume Ville de Kolwezi en RD-Congo</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div className="section">
            <Footer />
            <BoutonTop page={"/projets#top"} />
          </div>
        </div>
      </main>
    </AnimationPage>
  );
};

export default Projets;
