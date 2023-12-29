import React from "react";
import { HashLink } from "react-router-hash-link";

const Bouton = (props) => {
  return (
    <button className="btn">
      {props.apropos && (
        <HashLink to={props.apropos}>Voir plus<i class="fa-solid fa-chevron-down"></i></HashLink>
      )}

    </button>
  );
};

export default Bouton;
