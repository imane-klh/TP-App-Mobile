import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Navbar from './../components/NavBar';
import Footer from './../components/Footer';
const Home: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding" fullscreen>
        {/* Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/image/im17.jpg" height="400" className="d-block w-100" alt="Image description" />
              <div className="carousel-caption">
                <h5>Transformez votre vie, un livre à la fois.</h5>
               
              </div>
            </div>
            <div className="carousel-item">
              <img src="/image/im18.jpg" height="400" className="d-block w-100" alt="Image description" />
              <div className="carousel-caption">
                <h5>Explorez les mondes littéraires qui vous attendent !</h5>
             
              </div>
            </div>
            <div className="carousel-item">
              <img src="/image/im19.jpg" height="400" className="d-block w-100" alt="Image description" />
              <div className="carousel-caption">
                <h5>Libérez votre imagination et partez à l'aventure !</h5>
               
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Section Derniers livres ajoutés */}
        <div className="container my-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-light">📗 Derniers livres ajoutés</h2>
            <p className="text-muted fst-italic">Découvrez les nouvelles trouvailles de notre communauté !</p>
          </div>
          <br />
          <div className="row g-4">
            {/* Carte livre - Le Petit Prince */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card h-100 shadow">
                <img src="/image/im2.jpg" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} alt="Le Petit Prince" />
                <div className="card-body">
                  <h5 className="card-title">Le Petit Prince</h5>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Auteur :</strong> Antoine de Saint-Exupéry</p>
                  <p className="card-text"><strong>Éditeur :</strong> Gallimard (1943)</p>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Proposé par :</strong> Jean</p>
                  <hr className="my-2" />
                  <p className="card-text">Un conte philosophique intemporel.</p>
                  <div className="text-center mt-3">
                    <a href="/livre/le-petit-prince" className="btn btn-primary w-100">Voir plus</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Autres livres - vous pouvez créer un composant BookCard pour éviter la répétition */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card h-100 shadow">
                <img src="/image/im8.jpg" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} alt="1984" />
                <div className="card-body">
                  <h5 className="card-title">1984</h5>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Auteur :</strong> George Orwell</p>
                  <p className="card-text"><strong>Éditeur :</strong> Secker & Warburg (1949)</p>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Proposé par :</strong> Marie</p>
                  <hr className="my-2" />
                  <p className="card-text">Un roman dystopique captivant.</p>
                  <div className="text-center mt-3">
                    <a href="/plusinfo" className="btn btn-primary w-100">Voir plus</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajoutez les autres livres de la même manière */}
            {/* ... */}
          </div>
        </div>

        {/* Section Derniers livres échangés */}
        <div className="container my-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-light">📖 Derniers livres échangés</h2>
            <p className="text-muted fst-italic">Découvrez les ouvrages les plus prisés de notre communauté !</p>
          </div>
          <br />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {/* L'Étranger */}
            <div className="col">
              <div className="card h-100 shadow">
                <img src="/image/im6.jpg" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} alt="L'Étranger" />
                <div className="card-body">
                  <h5 className="card-title">L'Étranger</h5>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Auteur :</strong> Albert Camus</p>
                  <p className="card-text"><strong>Éditeur :</strong> Gallimard (1942)</p>
                  <hr className="my-2" />
                  <p className="card-text"><strong>Proposé par :</strong> Paul</p>
                  <hr className="my-2" />
                  <p className="card-text">Un roman philosophique marquant.</p>
                  <div className="text-center mt-3">
                    <a href="/livre/l-etranger" className="btn btn-primary w-100">Voir plus</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajoutez les autres livres échangés de la même manière */}
            {/* ... */}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;