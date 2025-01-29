import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../css/MentionsLegales.css';

const MentionsLegales = () => {
  return (
    <div className="mentions-container">
      <h1 className="mentions-title">Mentions légales</h1>
      <div className="blue-underline"></div>
      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <div className="editor-info">
              <h3>John Doe</h3>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <div className="host-info">
              <h3>alwaysdata</h3>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <a href="http://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
              </a>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <div className="credits-info">
              <p>
                Ce site a été réalisé par John Doe, étudiant au{' '}
                <a href="#" className="text-primary">
                  Centre Européen de formation
                </a>
                .
              </p>
              <p className="fst-italic">
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>
              </p>
              <p className="fst-italic">
                La favicon de ce site a été fournie par{' '}
                <a href="#" className="text-primary">
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MentionsLegales;