import React from "react";
import aproposimg from "../assets/images/mr-roger-hotel.jpeg";
import makomeno from "../assets/images/makomeno.jpg";
import villa from "../assets/images/hotel-rift-interieur.jpg";

const AproposComp = () => {
  return (
    <main>
      <div className="propos-comp">
        <div className="section">
          <h2 id="idapropos">A propos de l'Entreprise KME SARL</h2>
          <div className="section-apercu">
            <div className="img-apercu">
              <img src={aproposimg} alt="Hôtel Mr Roger" />
            </div>
            <div className="para-apercu">
              <h3>I. Appercu</h3>
              <p>
                KME SARL, est une société d’ingénierie et de construction de la
                communauté d’Afrique centrale, fournissant des solutions
                pratiques à divers clients depuis plus de 10 ans et rendue
                officiel en 2022, KME est spécialisée dans l’ingénierie et la
                construction dans tout le type des travaux publics tel que les
                travaux routiers, le terrassement, les études topographiques et
                géotechniques, le génie civil, l’hydraulique, les bâtiments,
                l’électricité, les ponts et chaussées, la protection de
                l’environnement, l’approvisionnement en eau potable et
                assainissement, l’urbanisme et aménagement du territoire, etc.
              </p>
              <p>
                Notre expertise est une compréhension approfondie des travaux de
                génie civil et des besoins géographiquement spécifiques ; notre
                expérience et notre myriade de solution clients nous laissent
                dans une position unique pour devenir la première société de
                génie civil et de construction de la région.
              </p>
              <p>
                En nommant l’identité de l’entreprise sous le nom de Kaboyi
                Makasi Engineering, on s’attend à aller de l’avant pour
                reconnaitre le professionnalisme, la fiabilité, la qualité et la
                diversité de l’ensemble du service afin de fournir une
                prestation de service encore plus excellente. Notre siège social
                est entre 16eme et 17eme poteau route Kinsevere/ Lubumbashi
                R.D.congo
              </p>
            </div>
          </div>
          <div className="section-mission">
            <div className="para-mission">
              <h3>II. Mission</h3>
              <p>
                La vision de la Société Kaboyi Makasi Engineering est de devenir
                l’entreprise la plus réputée d’Afrique en générale et de la
                République Démocratique du Congo en particulier ; motivée par
                l’innovation, pour fournir le développement qui mène à la
                croissance durable pour les populations et l’économie de
                l’Afrique et de la RDC.
              </p>
            </div>
            <div className="img-mission">
              <img src={villa} alt="Villa Makomeno" />
            </div>
          </div>
          <div className="section-valeurs">
            <div className="img-valeurs">
              <img src={makomeno} alt="Makomeno Appartement" />
            </div>
            <div className="para-valeurs">
              <h3>III. Valeurs</h3>
              <p>
                Les valeurs fondamentales de la Société KABOYI MAKASI
                ENGINEERING SARL définissent la manière dont nous devons agir à
                la fois en tant qu’un individu et en tant qu’une équipe de
                travail pour atteindre nos objectifs commerciaux
              </p>
              <p>
                Faire ce qui est juste : nous nous engageons à respecter les
                normes de conduite d’éthique les plus élevées dans tout ce que
                nous entreprenons ; nous croyons que l’honnêteté et l’intégrité
                engendre la confiance, qui est la pierre angulaire de notre
                entreprise. Nous nous efforçons d’être de bons citoyens et nous
                assumons la responsabilité de nos actions.
              </p>
              <p>
                Nous reconnaissons que notre succès en tant qu’entreprise dépend
                du talent, des compétences et de l’expertise de nos employés et
                de notre capacité à fonctionner comme une équipe étroitement
                intégrée.
              </p>
            </div>
          </div>
          <div className="section-domaine">
            <h3>IV. Ce que nous faisons</h3>
            <div class="faire">
              <p>
                <i class="fa-regular fa-circle-check"></i>Génie Civil et
                Construction
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Projets
                d'installations industrielles et électriques
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Travaux
                d'alimentation, de distribution et traitement des eaux
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Les étutes
                topographiques et géotechniques
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Le Service de
                nettoyage (Cleaning)
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Les projets
                d'innovations
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>L'expertise
                d'évaluation immobilière
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>La conception et
                production des plans architecturaux
              </p>
              <p>
                <i class="fa-regular fa-circle-check"></i>Les commerces généraux
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AproposComp;
