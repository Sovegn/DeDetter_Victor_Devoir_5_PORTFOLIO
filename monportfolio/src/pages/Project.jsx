import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: "../assets/images/portfolio/fresh-food.jpg",
      tech: "Site réalisé avec PHP et MySQL"
    },
    {
      id: 2,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: "../assets/images/portfolio/restaurant-japonais.jpg",
      tech: "Site réalisé avec WordPress"
    },
    {
      id: 3,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      image: "../assets/images/portfolio/espace-bien-etre.jpg",
      tech: "Site réalisé avec LARAVEL"
    },
    {
      id: 4,
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      image: "../assets/images/portfolio/seo.jpg",
      tech: "Utilisation des outils SEO"
    },
    {
      id: 5,
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: "../assets/images/portfolio/coder.jpg",
      tech: "PHP - SYMFONY"
    },
    {
      id: 6,
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: "../assets/images/portfolio/screens.jpg",
      tech: "Réalisé avec FIGMA"
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header text-center my-5">
        <strong>Portfolio</strong>
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
                    <a href="#" className="btn btn-primary">Voir le site</a>
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
