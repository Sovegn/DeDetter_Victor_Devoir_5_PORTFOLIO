import React from "react";
import Form from "../components/Form/Form";
import "../css/Contact.css";

/**
 * Page de contact, affichant un formulaire de contact ainsi que des informations
 * sur ma localisation.
 *
 * @returns {JSX.Element} Composant React correspondant à la page de contact.
 */
const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact
      </p>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Formulaire de contact</h2>
          <Form />
        </div>

        <div className="contact-info-section">
          <h2>Mes coordonnées</h2>
          <div className="contact-details">
            <h3>John Doe</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 40 rue Laure Diebold
            </p>
            <p>69009 Lyon, France</p>
            <p>
              <i className="fas fa-phone"></i> 10 20 30 40 50
            </p>
            <p>
              <i className="fas fa-envelope"></i> john.doe@gmail.com
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.083137269853!2d4.796281!3d45.778675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb020f3664e9!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1580000000000!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
