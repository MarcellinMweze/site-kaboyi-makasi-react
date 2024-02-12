import Devise from "../components/Devise";
import ReseauSociaux from "../components/ReseauSociaux";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import AnimationPage from "../AnimationPage";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    const formMess = document.querySelector("#form-message");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1kebho",
        "template_rodtk58",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='echec'>Une erreur s'est produite, veuillez réessayer !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 5000);
        }
      );
  };

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
        <div className="container-form">
          <div className="section">
            <div className="form-content">
              <div>
                <h3>Nous contacter </h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"
                      htmlFor="name">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Nom complet"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                      htmlFor="email"
                    >
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="nom@exemple.com"
                      required
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="4"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn contact btn-primary"
                    value="Envoyer"
                  />
                </form>
                <span id="form-message"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimationPage>
  );
};

export default Contact;
