import React from 'react';
import { IonPage, IonContent, IonImg, IonRouterLink } from '@ionic/react';
import Navbar from './../components/NavBar';
import Footer from './../components/Footer';

const Livres: React.FC = () => {
  const livres = [
    {
      id: 1,
      titre: "Le Petit Prince",
      auteur: "Antoine de Saint-Exupéry",
      annee: "1943",
      maison: "Gallimard",
      user: "Jean Dupont",
      img: "/image/im2.jpg",
      resume: "Un conte poétique et philosophique qui raconte l'histoire d'un petit prince venu d'une autre planète.",
      rating: 4.8
    },
    {
      id: 2,
      titre: "1984",
      auteur: "George Orwell",
      annee: "1949",
      maison: "Secker & Warburg",
      user: "Alice Martin",
      img: "/image/im8.jpg",
      resume: "Un roman dystopique décrivant une société sous surveillance totale où la liberté de pensée est menacée.",
      rating: 4.5
    },
    {
      id: 3,
      titre: "Dune",
      auteur: "Frank Herbert",
      annee: "1965",
      maison: "Chilton Books",
      user: "Marc Dupuis",
      img: "/image/im10.jpg",
      resume: "Une épopée de science-fiction se déroulant dans un univers complexe de politique interstellaire.",
      rating: 4.7
    }
  ];

  return (
    <IonPage>
      <Navbar />
      <IonContent className="bg-light" fullscreen>
        <section className="text-center py-5 bg-dark text-white">
          <h1 className="fw-bold">📚 Explorez notre bibliothèque</h1>
          <p className="lead">Trouvez et échangez des livres selon vos envies de lecture</p>
        </section>

        <div className="container my-4">
          <div className="d-flex justify-content-center">
            <div className="input-group w-75 shadow-sm rounded-pill overflow-hidden">
              <input type="text" className="form-control border-0 px-4" placeholder="🔍 Rechercher un livre..." />
              <button className="btn btn-primary px-4">Rechercher</button>
            </div>
          </div>
        </div>

        <div className="container text-center mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <a href="/livres/nouveaux" className="btn btn-outline-primary rounded-pill">Nouveaux</a>
            <a href="/let" className="btn btn-outline-primary rounded-pill">Littérature</a>
            <a href="/Science" className="btn btn-outline-primary rounded-pill">Science-Fiction</a>
            <a href="/livres/romans" className="btn btn-outline-primary rounded-pill">Romans</a>
          </div>
        </div>

        <div className="container">
          <div className="row g-4">
            {livres.map((livre) => (
              <div key={livre.id} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow">
                  <IonImg
                    src={livre.img}
                    alt={livre.titre}
                    className="card-img-top rounded-top"
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{livre.titre}</h5>
                    <p className="text-muted small">✍ {livre.auteur}</p>
                    <p className="small">{livre.annee} • {livre.maison}</p>
                    <p className="text-muted small">Proposé par <strong>{livre.user}</strong></p>

                    <IonRouterLink 
                      routerLink={`/livre-details`}
                      className="btn btn-sm btn-outline-primary w-100 rounded-pill"
                      state={{ livre }}
                    >
                      📖 Voir plus
                    </IonRouterLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Livres;