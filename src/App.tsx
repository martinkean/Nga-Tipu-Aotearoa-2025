import React from 'react';
import { Leaf, Menu, X, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const plantCards = Array(6).fill({
    title: 'Kōwhai',
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=800',
    description: "The kōwhai is one of the best known native trees in New Zealand and it's our unofficial national flower..."
  });

  return (
    <div className="layout">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__content">
            <div className="nav__brand">
              <Leaf className="nav__logo" />
              <span className="nav__title">Ngā Tipu Aotearoa</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav__menu">
              <div className="nav__links">
                <a href="#" className="nav__link">Home</a>
                <a href="#" className="nav__link">Plants</a>
                <a href="#" className="nav__link">About</a>
                <a href="#" className="nav__link">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav__mobile-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav__mobile-menu">
            <a href="#" className="nav__mobile-link">Home</a>
            <a href="#" className="nav__mobile-link">Plants</a>
            <a href="#" className="nav__mobile-link">About</a>
            <a href="#" className="nav__mobile-link">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Ngā Tipu Aotearoa – New Zealand Plants</h1>
          <p className="hero__text">
            Ngā Tipu Aotearoa provides access to information on plant taxa that occur in New Zealand. 
            The website combines data from the Plant Names Database and the Allan Herbarium Specimen Database.
          </p>
          <button className="hero__button">
            Continue reading
          </button>
        </div>
      </div>

      {/* Plant Cards Grid */}
      <div className="plants">
        <div className="plants__grid">
          {plantCards.map((card, index) => (
            <div key={index} className="plant-card">
              <img src={card.image} alt={card.title} className="plant-card__image" />
              <div className="plant-card__content">
                <h3 className="plant-card__title">{card.title}</h3>
                <p className="plant-card__description">{card.description}</p>
                <button className="plant-card__button">
                  Learn more <ChevronRight className="plant-card__button-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            <div>
              <h4 className="footer__section-title">Identification</h4>
              <div className="footer__links">
                <a href="#" className="footer__link">What is this bug?</a>
                <a href="#" className="footer__link">Invertebrates</a>
                <a href="#" className="footer__link">Plants</a>
                <a href="#" className="footer__link">Fungi</a>
              </div>
            </div>
            <div>
              <h4 className="footer__section-title">Resources</h4>
              <div className="footer__links">
                <a href="#" className="footer__link">Collections</a>
                <a href="#" className="footer__link">Databases</a>
                <a href="#" className="footer__link">Mapping</a>
              </div>
            </div>
            <div>
              <h4 className="footer__section-title">Education</h4>
              <div className="footer__links">
                <a href="#" className="footer__link">Teaching</a>
                <a href="#" className="footer__link">Learning</a>
              </div>
            </div>
            <div>
              <h4 className="footer__section-title">Other links</h4>
              <div className="footer__links">
                <a href="#" className="footer__link">About us</a>
                <a href="#" className="footer__link">Contact us</a>
                <a href="#" className="footer__link">Events</a>
                <a href="#" className="footer__link">Our people</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>Copyright Ngā Tipu Aotearoa © 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;