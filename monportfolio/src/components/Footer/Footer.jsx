import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>John Doe</h3>
            <ul>
              <li>40 rue Laura Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>john.doe@gmail.com</li>
              <li>icone réseaux sociaux</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <ul>
              <li>Accueil</li>
              <li>Services</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien être</li>
              <li>SGP</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer
