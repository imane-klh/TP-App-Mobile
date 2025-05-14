import React from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonImg, IonButton } from '@ionic/react';
import Navbar from './../components/NavBar';
import Footer from './../components/Footer';

const Utilisateurs: React.FC = () => {
  // Données des utilisateurs
  const users = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@email.com",
      booksExchanged: 5,
      image: "/image/im16.jpg"
    },
    {
      id: 2,
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      booksExchanged: 8,
      image: "/image/im16.jpg"
    },
    {
      id: 3,
      name: "Paul Martin",
      email: "paul.martin@email.com",
      booksExchanged: 3,
      image: "/image/im16.jpg"
    },
    {
      id: 4,
      name: "Emma Leroy",
      email: "emma.leroy@email.com",
      booksExchanged: 6,
      image: "/image/im16.jpg"
    },
    {
      id: 5,
      name: "Lucas Bernard",
      email: "lucas.bernard@email.com",
      booksExchanged: 7,
      image: "/image/im16.jpg"
    },
    {
      id: 6,
      name: "Sophie Morel",
      email: "sophie.morel@email.com",
      booksExchanged: 2,
      image: "/image/im16.jpg"
    },
    // Ajoutez d'autres utilisateurs au besoin
  ];

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding" fullscreen>
        <h2 className="text-center fw-bold mb-4 text-light">📋 Liste des Utilisateurs</h2>
        
        <IonGrid>
          <IonRow>
            {users.map(user => (
              <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="3" key={user.id}>
                <IonCard className="border-0 shadow-lg rounded-4 text-center h-100">
                  <IonImg 
                    src={user.image} 
                    className="rounded-circle mx-auto border border-3 mt-3"
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                    alt={`Avatar de ${user.name}`}
                  />
                  <IonCardHeader>
                    <h5 className="fw-bold text-dark">{user.name}</h5>
                  </IonCardHeader>
                  <IonCardContent>
                    <p className="text-muted">{user.email}</p>
                    <p className="text-secondary">📚 {user.booksExchanged} livres échangés</p>
                    <IonButton 
                      expand="block" 
                      fill="outline" 
                      shape="round" 
                      routerLink={`/profil?id=${user.id}`}
                      className="w-100"
                    >
                      Voir le profil
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Utilisateurs;