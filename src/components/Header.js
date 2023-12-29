import React from "react";

const Header = () => {
  return (
    <div className="entete">
      <div className="section entete">
        <div className="entete-gauche">
          <p>Votre Solution pour une Construction Moderne</p>
          <span className="icone gauche">
            <i className="fa-solid fa-phone"></i> +243990548021
          </span>
        </div>
        <div className="entete-droite">
          <span className="icone">
            <a href="">
              <i className="fa-regular fa-moon"></i>
            </a>
          </span>
          <span className="icone">
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </span>
          <span className="icone">
            <a href="">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
