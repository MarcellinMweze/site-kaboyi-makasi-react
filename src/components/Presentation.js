import React from "react";
import batiment1 from "../assets/images/batiment1.jpg";
import batiment5 from "../assets/images/station2.jpg";
import batiment4 from "../assets/images/hotel-rift.jpg";
import makomeno from "../assets/images/batiment4.jpg";
import universite from "../assets/images/universite-Aumonier.jpg"

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="section">
        <div className="imgbatiment">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={batiment1}
                  className="d-block "
                  alt="Batiment Mwana Mboka"
                />
              </div>
              <div className="carousel-item">
                <img src={batiment5} className="d-block " alt="Photo Station Service" />
              </div>
              <div className="carousel-item">
                <img
                  src={batiment4}
                  className="d-block "
                  alt="Photo Hôtel Rift Congo"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={makomeno}
                  className="d-block "
                  alt="Photo Appartement Jumelé Makomeno"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={universite}
                  className="d-block "
                  alt="Photo de l'Université des Aumoniers du Travail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
