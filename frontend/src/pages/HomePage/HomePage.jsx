import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import vector from "../../../src/assests/images/Circle-heart.png";
import arrow from "../../../src/assests/images/Icon.svg"
import logo from "../../../src/assests/images/logo.png"
import loyalty from "../../../src/assests/images/loyalty.png"
import Trustpilot from "../../../src/assests/images/Frame 748.png"
import star from "../../../src/assests/images/image 13.png"
import bg from "../../../src/assests/images/image.png"
import frame from "../../../src/assests/images/Frame 562.png"
import frame1 from "../../../src/assests/images/Frame 562 (1).png"
import frame2 from "../../../src/assests/images/Frame 562 (2).png"
import p1 from "../../../src/assests/images/Product card (1).png"

import m1 from "../../../src/assests/images/image001 1.png"

const HomePage = () => {
  return (
    <div>
      <div className="top-banner text-center py-2">
  <img src={vector} alt="heart" width="18" style={{ marginRight: "6px" }} />
  Coup de coeur La route des Vins de Bourgogne
  <img src={arrow} alt="arrow" style={{ marginInlineStart: "6px" }} />
</div>

<header className="homepage">
  <img src={bg} alt="river" className="hero-bg" />
  <div className="overlay"></div>
<div> 
  
  <div className="hero-text text-white">
    <h1 className="fw-bold display-5">
      Vivez la croisière fluviale, autrement.
    </h1>
    <p className="lead mt-3">
      Partez sans permis à la découverte des rivières et canaux de France et d’Europe.
      Naviguez à votre rythme, partagez des moments précieux en famille ou entre amis,
      reconnectez-vous à la nature et redécouvrez ce qui vous lie.
    </p>

    <div
      className="mt-4 d-inline-flex align-items-center bg-white text-dark px-3 py-2 rounded shadow"
      style={{ fontSize: "14px" }}
    >
      <div className="text-start">
        <p className="mb-0 text-muted">Basé sur 2130 avis</p>
        <div className="d-flex align-items-center">
          <img src={Trustpilot} alt="Trustpilot" style={{ width: "100px" }} />
          <img src={star} alt="stars" style={{ width: "90px", marginRight: "6px" }} />
        </div>
      </div>
    </div>

    <div className="mt-4">
      <a
        href="#1"
        className="text-white text-decoration-none fw-semibold border-bottom border-white pb-1"
      >
        Plonger dans l’aventure →
      </a>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg py-3 px-4 position-absolute w-100 top-0">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-center">
        <img src={logo} alt="logo" style={{ width: "130px", marginInlineStart: "6px" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <li className="nav-item mx-2"><a className="nav-link text-white" href="/">Destinations</a></li>
        <li className="nav-item mx-2"><a className="nav-link text-white" href="/" style={{ whiteSpace: "nowrap" }}>Idées séjours</a></li>
        <li className="nav-item mx-2"><a className="nav-link text-white" href="/" style={{ whiteSpace: "nowrap" }}>Nos bateaux</a></li>
        <li className="nav-item mx-2"><a className="nav-link text-white" href="/" style={{ whiteSpace: "nowrap" }}>L’expérience Riverly</a></li>
        <li className="nav-item mx-2">
          <a className="nav-link bons-plan-link" href="/" style={{ whiteSpace: "nowrap" }}>
            Bons plans <img src={loyalty} alt="loyalty" />
          </a>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-success">Devis</button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-success" style={{ whiteSpace: "nowrap" }}>
            Réservation rapide
          </button>
        </li>
        <a className="nav-link call" href="/" style={{ whiteSpace: "nowrap" }}>
          +33 35 77 77 77</a>
      </ul>
    </div>

    <div className="d-flex align-items-center text-white ms-3" style={{ whiteSpace: "nowrap" }}>
      FR — € ^
    </div>
    <div></div>
  </nav>
</div>
</header>


      <section className="search-section bg-light p-4 rounded shadow mx-auto mt-n5 mb-5">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button className="nav-link active">Recherche par Itinéraire</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Recherche par Bateau</button>
          </li>
        </ul>

        <form className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Destination</label>
            <select className="form-select">
              <option>Bourgogne et environs</option>
              <option>Canal du Midi</option>
              <option>Alsace</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Date de départ</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Durée du séjour</label>
            <select className="form-select">
              <option>Une semaine</option>
              <option>3 jours</option>
              <option>10 jours</option>
            </select>
          </div>
          <div className="col-md-1">
            <label className="form-label">Équipage</label>
            <select className="form-select">
              <option>2 adultes</option>
              <option>4 adultes</option>
              <option>Famille</option>
            </select>
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <button type="submit" className="btn btn-success ">
              Lancer 
            </button>
          </div>
        </form>
      </section>

       <section className="boat-section container py-5 my-5">
        <div className="row align-items-center">
          {/* Left column: text */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-dark lh-sm">
              Location de bateau sans permis,{" "}
              <span className="text-success">avec Riverly.</span>
            </h2>
            <p className="mt-3 text-secondary fs-5">
              Découvrez la richesse culturelle des territoires au côté de ceux
              qui comptent. Riverly, c’est bien plus qu’une croisière, c’est une
              expérience.
            </p>
            <div className="decor-line mt-5"></div>
          </div>

          {/* Right column: accordion */}
          <div className="col-md-6">
            <div className="accordion shadow-sm" id="riverlyAccordion">
              {/* Accordion Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-success fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="bi bi-water me-2"></i>
                    Vivez l’expérience authentique du tourisme fluvial
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#riverlyAccordion"
                >
                  <div className="accordion-body">
                    Voyager avec Riverly, c’est partager une expérience
                    touristique authentique. Les maîtres mots sont la proximité,
                    la découverte et l’autonomie. En louant votre bateau, vous
                    devenez le capitaine de votre croisière fluviale ! Choisissez
                    la convivialité du voyage en famille, entre amis ou en couple
                    et découvrez des paysages authentiques ! Vous découvrirez
                    également les différents terroirs par la nature, le
                    patrimoine, les vignobles ou encore par la population locale.
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold text-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="bi bi-sailboat me-2"></i>
                    Des vacances originales et personnalisées avec Riverly
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#riverlyAccordion"
                >
                  <div className="accordion-body">
                    Riverly vous permet de personnaliser votre croisière selon vos
                    envies : itinéraires, durée, escales, et rythme de navigation.
                    Chaque séjour est unique, adapté à votre équipage et à vos
                    attentes.
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold text-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="bi bi-heart me-2"></i>
                    Des croisières fluviales inoubliables vous attendent
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#riverlyAccordion"
                >
                  <div className="accordion-body">
                    Profitez d’un confort optimal à bord et laissez-vous porter
                    par la beauté des canaux et rivières d’Europe. Chaque escale
                    est une nouvelle découverte et un souvenir à partager.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           <section className="offers-section container py-5">
      {/* Section Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="fw-bold text-dark mb-3 mb-md-0">
          Les <span className="text-danger">offres</span> du moment
        </h2>
        <button className="btn btn-outline-danger rounded-pill fw-semibold">
          Toutes les offres spéciales →
        </button>
      </div>

      {/* 3 Offers Side by Side */}
      <div className="row g-4">
        {/* Offer 1 */}
        <div className="col-md-4">
          <div className="offer-card d-flex flex-column shadow-sm border-0 rounded-4 h-100">
            <img
              src={frame}
              alt="Croisière fluviale"
              className="offer-img rounded-top"
            />
            <div className="p-3 bg-white d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="text-primary fw-bold">
                  Les prix Crazy sur votre été
                </h5>
                <p className="text-secondary mb-4">
                  Embarquez pour une aventure fluviale en mai. -30% sur tous les
                  séjours de mai.
                </p>
              </div>
              <button className="btn btn-primary rounded-pill align-self-start">
                J’en profite →
              </button>
            </div>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="col-md-4">
          <div className="offer-card d-flex flex-column shadow-sm border-0 rounded-4 h-100">
            <img
              src={frame1}
              alt="Croisière fluviale"
              className="offer-img rounded-top"
            />
            <div className="p-3 bg-white d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="text-primary fw-bold">
                  Last Minute -30% sur tout mai
                </h5>
                <p className="text-secondary mb-4">
                  Embarquez pour une aventure fluviale en mai. -30% sur tous les
                  séjours de mai.
                </p>
              </div>
              <button className="btn btn-primary rounded-pill align-self-start">
                J’en profite →
              </button>
            </div>
          </div>
        </div>

        {/* Offer 3 */}
        <div className="col-md-4">
          <div className="offer-card d-flex flex-column shadow-sm border-0 rounded-4 h-100">
            <img
              src={frame2}
              alt="Croisière fluviale"
              className="offer-img rounded-top"
            />
            <div className="p-3 bg-white d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="text-primary fw-bold">
                  Les prix Crazy sur votre été
                </h5>
                <p className="text-secondary mb-4">
                  Embarquez pour une aventure fluviale en mai. -30% sur tous les
                  séjours de mai.
                </p>
              </div>
              <button className="btn btn-primary rounded-pill align-self-start">
                J’en profite →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="destinations-section container py-5">
  <div className="text-center mb-4">
    <h2 className="fw-bold text-dark">
      Nos destinations <span className="text-success">de location de bateau</span>
    </h2>
    <a href="/" className="text-success fw-semibold">
      Toutes nos destinations →
    </a>
  </div>

  <div className="row align-items-center">
    {/* Left side: destination cards */}
    <div className="col-md-6">
      <div className="row g-3">
        {[
          "Alsace & Ardennes",
          "Anjou",
          "Bourgogne & Saône",
          "Bretagne",
          "Charente",
          "Camargue",
        ].map((region, index) => (
          <div className="col-6" key={index}>
            <div className="card shadow-sm border-0 h-100 destination-card">
              <img
                src={p1}
                className="card-img-top rounded-top"
                alt={region}
              />
              <div className="card-body p-2">
                <h6 className="card-title text-center text-success fw-bold mb-0">
                  {region}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right side: map */}
    <div className="col-md-6 text-center">
      <img
        src={m1}
        alt="Carte des destinations de location de bateau"
        className="img-fluid rounded shadow"
      />
    </div>
  </div>
</section>
<section className="cruises-section py-5">
  <div className="container">
    <div className="text-center mb-4">
      <h2 className="fw-bold text-white">Nos croisières fluviales</h2>
    </div>

    <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
      {["France", "Allemagne", "Pays-Bas", "Italie", "Irlande", "Portugal", "Hongrie"].map((country, index) => (
        <button key={index} className={`btn btn-light rounded-pill px-3 ${index === 0 ? "active" : ""}`}>
          {country}
        </button>
      ))}
      <a href="/" className="text-white fw-semibold ms-3 text-decoration-none">
        Toutes nos croisières fluviales →
      </a>
    </div>

    {/* Cruise Cards */}
    <div className="row g-4 justify-content-center">
      {[
        {
          country: "France",
          title: "Canal du Midi",
          desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
          img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        },
        {
          country: "France",
          title: "Bourgogne et environs",
          desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
          country: "France",
          title: "Alsace",
          desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
          img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        },
        {
          country: "France",
          title: "Bretagne",
          desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

        },
      ].map((cruise, index) => (
        <div key={index} className="col-md-3">
          <div className="card cruise-card h-100 border-0 shadow-sm">
            <img src={cruise.img} className="card-img-top" alt={cruise.title} />
            <div className="card-body">
              <small className="text-muted d-block mb-1">
                🇫🇷 {cruise.country}
              </small>
              <h5 className="card-title fw-bold text-dark">{cruise.title}</h5>
              <p className="text-secondary small">{cruise.desc}</p>
              <a href="/" className="text-success fw-semibold text-decoration-none">
                Découvrir la région →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="ideas-section py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Idées de séjour en France</h2>

    <div className="row g-4">
      {[
        {
          title: "Oenologie & Gastronomie",
          desc: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
          icon: "🍷",
          img:{p1},
        },
        {
          title: "Baignade",
          desc: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
          icon: "🏊‍♂️",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "100% Nature",
          desc: "Direction la nature et les paysages verdoyants pour une pause bien-être.",
          icon: "🌿",
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Patrimoine",
          desc: "Explorez les trésors architecturaux et culturels de nos régions françaises.",
          icon: "🏰",
          img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        },
      ].map((idea, i) => (
        <div key={i} className="col-md-6">
          <div className="idea-card d-flex shadow-sm rounded overflow-hidden h-100">
            <div className="idea-image" style={{ backgroundImage: `url(${idea.img})` }}></div>
            <div className="p-3 d-flex flex-column justify-content-between bg-white w-100">
              <div>
                <h6 className="fw-bold text-success mb-2">
                  {idea.icon} {idea.title}
                </h6>
                <p className="small text-secondary mb-3">{idea.desc}</p>
              </div>
              <a href="/" className="fw-semibold text-success text-decoration-none">
                Découvrir →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-4">
      <a href="/" className="text-muted text-decoration-none fw-semibold">
        Toutes nos thématiques →
      </a>
    </div>
  </div>
</section>

{/* --- Section: Coups de cœur du moment --- */}
<section className="favorites-section py-5">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="fw-bold text-dark">
        <span className="text-success">Coups de cœur</span> du moment
      </h2>
      <button className="btn btn-success rounded-pill fw-semibold">
        Demander un devis gratuit →
      </button>
    </div>

    <div className="row g-4">
      {[1, 2, 3].map((n) => (
        <div key={n} className="col-md-4">
          <div className="card h-100 border-0 shadow-sm favorite-card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              className="card-img-top"
              alt="Croisière"
            />
            <div className="card-body">
              <small className="text-muted d-block mb-1">🇫🇷 France / Alsace</small>
              <h5 className="fw-bold text-dark mb-3">
                Croisière sur le canal de la Marne au Rhône
              </h5>
              <ul className="list-unstyled small text-secondary mb-3">
                <li>📍 Départ : Saverne</li>
                <li>📍 Arrivée : Saint-Léger-sur-Dheune</li>
                <li>🕒 1 semaine</li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-success">À partir de 670€</span>
                <button className="btn btn-success btn-sm rounded-pill">
                  Découvrir l’itinéraire →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="reviews-section py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">Ils ont voyagé avec nous</h2>
          <div className="mb-4">
            <h4 className="fw-bold text-success">4,4</h4>
            <p className="text-muted small">Excellent sur ⭐ Trustpilot</p>
          </div>

          <div className="row justify-content-center">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="col-md-3 mb-4">
                <div className="p-3 border rounded-4 shadow-sm h-100 bg-light text-start">
                  <h6 className="fw-bold mb-2">Tout est bien conçu et organisé</h6>
                  <p className="text-secondary small mb-3">
                    La pénichette est maniable. L'intérieur est propre et bien conçu.
                    Il ne manque rien en matière de matériel de cuisine.
                  </p>
                  <p className="small text-success mb-1">📍 Départ depuis Glénac</p>
                  <div className="d-flex align-items-center mt-2">
                    <div className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px" }}>
                      J
                    </div>
                    <div className="ms-2">
                      <strong>Josette</strong>
                      <div className="small text-warning">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section: Découvrez nos bateaux sans permis --- */}
      <section className="boats-section py-5" style={{ backgroundColor: "#0b3c49" }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-4 text-center">Découvrez nos bateaux sans permis</h2>

          <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
            {["Classic", "Comfort", "Premium", "Premium +"].map((cat, i) => (
              <button key={i} className="btn btn-outline-light rounded-pill px-3 py-1">
                {cat}
              </button>
            ))}
            <button className="btn btn-outline-light rounded-pill px-3 py-1">
              Pénichettes
            </button>
            <button className="btn btn-outline-light rounded-pill px-3 py-1">
              Cruisers
            </button>
            <button className="btn btn-outline-light rounded-pill px-3 py-1">
              Tous nos bateaux →
            </button>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Pénichette Comfort 4/6 pers.",
                cabins: 4,
                baths: 3,
                price: "À partir de 990€",
          img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Cruiser Premium + 6/8 pers.",
                cabins: 4,
                baths: 3,
                price: "À partir de 990€",
          img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Pénichette Classique 2/4 pers.",
                cabins: 2,
                baths: 1,
                price: "À partir de 670€",
          img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
              },
            ].map((boat, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={boat.img}
                    alt={boat.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body bg-white text-dark">
                    <h6 className="fw-bold mb-2">{boat.title}</h6>
                    <p className="small text-secondary mb-2">
                      🛏️ {boat.cabins} cabines &nbsp; | &nbsp; 🚿 {boat.baths} salles d’eau &nbsp; | &nbsp; ❄️ Climatisation
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-success">{boat.price}</span>
                      <button className="btn btn-success btn-sm rounded-pill">
                        Découvrir le bateau →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="blog-section py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Le <span className="text-success">Blog Riverly</span>
          </h2>
          <a href="/" className="text-muted fw-semibold text-decoration-none d-inline-block mb-5">
            Tous nos articles →
          </a>

          <div className="row g-4 justify-content-center">
            {[1, 2, 3].map((n) => (
              <div key={n} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                    className="card-img-top"
                    alt="Croisière"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                          alt="Auteur"
                          className="rounded-circle me-2"
                          style={{ width: "28px", height: "28px" }}
                        />
                        <small className="text-success fw-semibold">
                          par Raphaëlle
                        </small>
                      </div>
                      <small className="text-muted">12/05/25</small>
                    </div>
                    <h6 className="fw-bold mb-3">
                      Les meilleures croisières fluviales à découvrir en 2025
                    </h6>
                    <a
                      href="/"
                      className="text-success fw-semibold text-decoration-none"
                    >
                      Lire l’article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section: Les questions fréquentes (FAQ) --- */}
      <section className="faq-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Les questions fréquentes</h2>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-success bg-opacity-10 fw-semibold text-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  Combien coûte la location de bateau ?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show">
                <div className="accordion-body text-secondary">
                  Les prix varient selon la durée, la saison et le type de bateau.
                  La location commence à environ 1120 € pour une semaine en basse saison.
                  Pour un tarif précis, consultez le site Riverly ou contactez notre service clientèle.
                </div>
              </div>
            </div>

            {[
              {
                id: "faq2",
                q: "Comment louer un bateau avec Riverly ?",
                a: "Rien de plus simple ! Sélectionnez votre bateau, choisissez vos dates et réservez directement en ligne.",
              },
              {
                id: "faq3",
                q: "Est-il nécessaire d’avoir un permis pour louer un bateau ?",
                a: "Non, la plupart de nos bateaux se pilotent sans permis. Une initiation est fournie avant le départ.",
              },
              {
                id: "faq4",
                q: "Quels sont les équipements inclus avec la location de mon bateau ?",
                a: "Tous nos bateaux disposent d’une cuisine équipée, de linge de lit, de serviettes et d’un espace extérieur.",
              },
            ].map((item, i) => (
              <div key={i} className="accordion-item mb-3 border-0 shadow-sm">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-semibold text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={item.id}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-secondary">{item.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="/"
              className="text-success fw-semibold text-decoration-none"
            >
              Découvrir la FAQ →
            </a>
          </div>
        </div>
      </section>




    </div>
  );
};

export default HomePage;
