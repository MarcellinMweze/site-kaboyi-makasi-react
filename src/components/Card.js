import React from "react";
import logimg from "../assets/images/makomeno.jpg";
import { projectsData } from "../data/projectsData";

const Card = () => {
  console.log(projectsData);
  return (
    <div className="projet-card">
      <img src={logimg} alt="Projet Université" />
      <p>
        <strong>Description du Projet : </strong>Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Cupiditate accusamus nisi expedita, iure
        illum soluta corporis, consequuntur nihil eligendi, voluptate repellat
        repellendus ipsam obcaecati! Facilis, mollitia. Provident quidem
        nesciunt eveniet!
      </p>
      <p>
        <strong>Adresse :</strong> <em>Avenue X Quartier Y Lubumbashi</em>
      </p>
    </div>
  );
};

export default Card;
