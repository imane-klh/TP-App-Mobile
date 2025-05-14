import React from 'react';
import { IonPage, IonContent, IonImg } from '@ionic/react';
import Navbar from './../components/NavBar';
import Footer from './../components/Footer';

const Auteurs: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding" fullscreen>
        <div className="container my-5">
          <h2 className="text-center fw-bold mb-4 text-light">📖 Auteurs Populaires</h2>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            
            {/* Carte Auteur - J.K. Rowling */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">J.K. Rowling (7 livres)</div>
                <IonImg 
                  src="/image/im11.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3" 
                  alt="J.K. Rowling"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: Royaume-Uni <br /> • 1965 -</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Harry Potter à l'école des sorciers</li>
                    <li>• Harry Potter et la Chambre des secrets</li>
                    <li>• Harry Potter et le Prisonnier d'Azkaban</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Carte Auteur - George Orwell */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">George Orwell (5 livres)</div>
                <IonImg 
                  src="/image/im12.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3" 
                  alt="George Orwell"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: Royaume-Uni <br /> • 1903 - 1950</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• 1984</li>
                    <li>• La Ferme des animaux</li>
                    <li>• Hommage à la Catalogne</li>
                    <li>• Une histoire birmane</li>
                    <li>• Dans la dèche à Paris et à Londres</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Auteur - Victor Hugo */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">Victor Hugo (3 livres)</div>
                <IonImg 
                  src="/image/im23.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3"
                  alt="Victor Hugo"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: France <br /> 1802 - 1885</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Les Misérables</li>
                    <li>• Notre-Dame de Paris</li>
                    <li>• Le Dernier Jour d'un condamné</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Auteur - Jane Austen */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">Jane Austen (3 livres)</div>
                <IonImg 
                  src="/image/im20.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3"
                  alt="Jane Austen"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: Royaume-Uni <br /> 1775 - 1817</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Orgueil et Préjugés</li>
                    <li>• Raison et Sentiments</li>
                    <li>• Emma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Auteur - Fiodor Dostoïevski */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">Fiodor Dostoïevski (3 livres)</div>
                <IonImg 
                  src="/image/im21.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3"
                  alt="Fiodor Dostoïevski"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: Russie <br /> 1821 - 1881</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Crime et Châtiment</li>
                    <li>• Les Frères Karamazov</li>
                    <li>• L'Idiot</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Auteur - Frank Herbert */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">Frank Herbert (2 livres)</div>
                <IonImg 
                  src="/image/im22.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3"
                  alt="Frank Herbert"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: États-Unis <br /> 1920 - 1986</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Dune</li>
                    <li>• Le Messie de Dune</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Auteur - Ernest Hemingway */}
            <div className="col">
              <div className="card border-0 shadow-lg rounded-4 text-center p-3">
                <div className="card-header bg-transparent fw-bold text-dark">Ernest Hemingway (3 livres)</div>
                <IonImg 
                  src="/image/im24.jpg" 
                  className="rounded-circle mx-auto border border-3 mt-3"
                  alt="Ernest Hemingway"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="text-muted">Pays: États-Unis <br /> 1899 - 1961</p>
                  <h6 className="fw-bold text-secondary">📚 Livres :</h6>
                  <ul className="list-unstyled">
                    <li>• Le Vieil Homme et la mer</li>
                    <li>• Pour qui sonne le glas</li>
                    <li>• Paris est une fête</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Auteurs;