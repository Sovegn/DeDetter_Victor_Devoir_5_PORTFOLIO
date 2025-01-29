import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";
import MentionsLegales from "./pages/MentionsLegales";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * App is the main component of the application, it renders the Navbar, the main content (a set of routes) and the Footer.
 * The main content is a set of routes, each route renders a different component (Home, Contact, MentionsLegales, Project, Services).
 * The Navbar is a component that renders the navigation bar.
 * The Footer is a component that renders the footer of the page.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
