import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Project.css";
import freshFoodImage from "../assets/images/portfolio/fresh-food.jpg";
import restaurantImage from "../assets/images/portfolio/restaurant-japonais.jpg";
import bienEtreImage from "../assets/images/portfolio/espace-bien-etre.jpg";
import seoImage from "../assets/images/portfolio/seo.jpg";
import coderImage from "../assets/images/portfolio/coder.jpg";
import screenImage from "../assets/images/portfolio/screens.jpg";

/**
 * Renders a portfolio section showcasing various projects.
 * Each project is displayed as a card with an image, title, description,
 * and technology used. The projects are defined in a list and are rendered
 * dynamically using the map function.
 *
 * @component
 */

const Project = () => {
  /**
   * List of projects to display.
   * Each project has an id, title, description, image, and technology used.
   */
  const projects = [
    {
      id: 1,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: freshFoodImage,
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      id: 2,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: restaurantImage,
      tech: "Site réalisé avec WordPress",
    },
    {
      id: 3,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      image: bienEtreImage,
      tech: "Site réalisé avec LARAVEL",
    },
    {
      id: 4,
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      image: seoImage,
      tech: "Utilisation des outils SEO",
    },
    {
      id: 5,
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: coderImage,
      tech: "PHP - SYMFONY",
    },
    {
      id: 6,
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: screenImage,
      tech: "Réalisé avec FIGMA",
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header text-center my-5">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations</p>
        <hr className="blue-divider" />
      </div>

      <div className="container">
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card project-card h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto text-center">
                    <a href="#" className="btn btn-primary">
                      Voir le site
                    </a>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <small className="text-muted">{project.tech}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
