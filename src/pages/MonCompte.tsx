import React, { useState } from 'react';
import { IonPage, IonContent, IonImg, IonButton, IonIcon, IonList, IonItem, IonLabel, IonBadge, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import { pencilOutline, logOutOutline, addOutline, trashOutline } from 'ionicons/icons';
import Navbar from './../components/NavBar';
import Footer from './../components/Footer';

const MonCompte: React.FC = () => {
  const [livresDonnes, setLivresDonnes] = useState([
    { id: 1, titre: "Les Misérables", destinataire: "Paul" },
    { id: 2, titre: "Le Petit Prince", destinataire: "Sophie" }
  ]);

  const [livresRecus, setLivresRecus] = useState([
    { id: 1, titre: "1984", donneur: "Paul" },
    { id: 2, titre: "L'Alchimiste", donneur: "Sophie" }
  ]);

  const [mesLivres, setMesLivres] = useState([
    { id: 1, titre: "Le Comte de Monte-Cristo" },
    { id: 2, titre: "L'Étranger" }
  ]);

  const handleDeleteBook = (id: number) => {
    setMesLivres(mesLivres.filter(livre => livre.id !== id));
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding" fullscreen>
        <IonGrid className="my-5">
          <IonRow>
            {/* Profil utilisateur */}
            <IonCol size="12" sizeLg="4" className="mb-4">
              <IonCard className="h-100 d-flex flex-column">
                <IonCardContent className="text-center flex-grow-1">
                  <IonImg 
                    src="/image/im16.jpg" 
                    className="rounded-circle mb-3 border border-4 mx-auto"
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                    alt="Avatar"
                  />
                  <h4 className="fw-bold text-dark">Amina</h4>
                  <p className="text-muted mb-3">amina@email.com</p>
                  
                  {/* Statistiques */}
                  <div className="d-flex justify-content-around w-100">
                    <div className="text-center">
                      <h5 className="fw-bold text-success">10</h5>
                      <p className="small text-muted">Livres échangés</p>
                    </div>
                    <div className="text-center">
                      <h5 className="fw-bold text-warning">5</h5>
                      <p className="small text-muted">Livres ajoutés</p>
                    </div>
                  </div>
                </IonCardContent>

                {/* Boutons */}
                <div className="p-3">
                  <IonButton expand="block" className="mb-2">
                    <IonIcon slot="start" icon={pencilOutline} />
                    Modifier mes infos
                  </IonButton>
                  <IonButton expand="block" color="danger" fill="outline">
                    <IonIcon slot="start" icon={logOutOutline} />
                    Se déconnecter
                  </IonButton>
                </div>
              </IonCard>
            </IonCol>

            {/* Détails du compte */}
            <IonCol size="12" sizeLg="8">
              <IonCard className="h-100">
                <IonCardContent>
                  <h4 className="fw-bold mb-3 text-dark text-center">Mon activité</h4>

                  {/* Livres donnés */}
                  <h6 className="fw-bold text-secondary">📤 Livres donnés</h6>
                  <IonList className="mb-3">
                    {livresDonnes.map(livre => (
                      <IonItem key={livre.id}>
                        <IonLabel>{livre.titre}</IonLabel>
                        <IonBadge color="medium">Donné à {livre.destinataire}</IonBadge>
                      </IonItem>
                    ))}
                  </IonList>

                  {/* Livres reçus */}
                  <h6 className="fw-bold text-secondary">📥 Livres reçus</h6>
                  <IonList className="mb-4">
                    {livresRecus.map(livre => (
                      <IonItem key={livre.id}>
                        <IonLabel>{livre.titre}</IonLabel>
                        <IonBadge color="medium">Reçu de {livre.donneur}</IonBadge>
                      </IonItem>
                    ))}
                  </IonList>

                  {/* Mes livres ajoutés */}
                  <h4 className="fw-bold mb-3 text-dark text-center">Mes livres ajoutés</h4>
                  <IonList>
                    {mesLivres.map(livre => (
                      <IonItem key={livre.id}>
                        <IonLabel>{livre.titre}</IonLabel>
                        <IonButton 
                          size="small" 
                          color="danger" 
                          fill="outline"
                          onClick={() => handleDeleteBook(livre.id)}
                        >
                          <IonIcon slot="icon-only" icon={trashOutline} />
                        </IonButton>
                      </IonItem>
                    ))}
                  </IonList>
                  <IonButton expand="block" color="success" className="mt-3">
                    <IonIcon slot="start" icon={addOutline} />
                    Ajouter un livre
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default MonCompte;