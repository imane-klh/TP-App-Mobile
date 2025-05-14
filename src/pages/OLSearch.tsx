import React, { useState, useRef, useEffect } from 'react';
import {
  IonPage, IonContent, IonHeader, IonToolbar, IonTitle,
  IonInput, IonButton, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonImg, IonSpinner, IonAlert
} from '@ionic/react';

import Navbar from './../components/NavBar';
import Footer from './../components/Footer';

const OLSearch: React.FC = () => {
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [authors, setAuthors] = useState<any[]>([]);
  const [works, setWorks] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const worksRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorName.trim()) {
      setShowAlert(true);
      return;
    }

    setLoading(true);
    setError('');
    setAuthors([]);
    setWorks([]);

    try {
      const response = await fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(authorName)}`);
      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        const filteredAuthors = data.docs
          .filter((doc: any) => doc.author_key && doc.author_name)
          .slice(0, 12)
          .map((doc: any) => ({
            key: doc.author_key[0],
            name: doc.author_name[0],
            imageUrl: `https://covers.openlibrary.org/a/olid/${doc.author_key[0]}.jpg`
          }));

        setAuthors(filteredAuthors);
      } else {
        setError(`Aucun résultat trouvé pour "${authorName}"`);
      }
    } catch (err) {
      console.error('Erreur lors de la recherche:', err);
      setError('Une erreur est survenue lors de la recherche');
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthorWorks = async (authorKey: string) => {
    setLoading(true);
    setWorks([]);

    try {
      const response = await fetch(`https://openlibrary.org/authors/${authorKey}/works.json`);
      const data = await response.json();

      if (data.entries && data.entries.length > 0) {
        const formattedWorks = data.entries.slice(0, 12).map((work: any) => ({
          title: work.title || "Titre inconnu",
          year: work.first_publish_date || "Date inconnue",
          coverId: work.covers ? work.covers[0] : null,
          imageUrl: work.covers
            ? `https://covers.openlibrary.org/b/id/${work.covers[0]}-L.jpg`
            : 'https://via.placeholder.com/300x450?text=Aucune+image'
        }));

        setWorks(formattedWorks);
      } else {
        setError('Aucune œuvre trouvée pour cet auteur');
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des œuvres:', err);
      setError('Erreur lors du chargement des œuvres');
    } finally {
      setLoading(false);
    }
  };

  // Scroll vers les livres automatiquement
  useEffect(() => {
    if (works.length > 0) {
      worksRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [works]);

  const clearInput = () => {
    setAuthorName('');
    setAuthors([]);
    setWorks([]);
    setError('');
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding">
        <IonHeader>
          <IonToolbar>
            <IonTitle className="text-center">Rechercher via OpenLibrary</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={handleSearch} className="ion-padding">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" className="ion-text-center">
                <div style={{ position: 'relative' }}>
                  <IonInput
                    value={authorName}
                    onIonChange={(e) => setAuthorName(e.detail.value!)}
                    placeholder="Rechercher Nom Auteur"
                    className="ion-padding-start"
                    style={{ borderRadius: '50px', background: 'white', color: 'black' }} // Couleur noire ajoutée
                  />

                  {authorName && (
                    <IonButton
                      fill="clear"
                      style={{ position: 'absolute', right: '0', top: '0' }}
                      onClick={clearInput}
                    >
                      &times;
                    </IonButton>
                  )}
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="ion-text-center">
                <IonButton
                  type="submit"
                  expand="block"
                  shape="round"
                  className="ion-margin-top ion-margin-md-top-0"
                >
                  Rechercher
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>

        {loading && (
          <div className="ion-text-center ion-padding">
            <IonSpinner name="crescent" />
            <p>Recherche en cours...</p>
          </div>
        )}

        {error && (
          <div className="ion-text-center ion-padding text-danger">
            <p>{error}</p>
          </div>
        )}

        {/* Résultats auteurs */}
        {authors.length > 0 && (
          <IonGrid className="ion-margin-top">
            <IonRow>
              {authors.map((author) => (
                <IonCol size="12" sizeSm="6" sizeMd="4" sizeLg="3" key={author.key}>
                  <IonCard
                    button
                    onClick={() => fetchAuthorWorks(author.key)}
                    style={{ height: '100%' }}
                  >
                    <IonImg
                      src={author.imageUrl}
                      alt={`Image de ${author.name}`}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <IonCardHeader>
                      <IonCardTitle>{author.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Découvrez les ouvrages de cet auteur</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}

        {/* Œuvres de l'auteur sélectionné */}
        {works.length > 0 && (
          <div ref={worksRef} className="ion-margin-top">
            <h2 className="ion-text-center">Œuvres de l'auteur sélectionné</h2>
            <IonGrid>
              <IonRow>
                {works.map((work, index) => (
                  <IonCol size="12" sizeSm="6" sizeMd="4" sizeLg="3" key={index}>
                    <IonCard style={{ height: '100%' }}>
                      <IonImg
                        src={work.imageUrl}
                        alt={`Couverture de ${work.title}`}
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                      <IonCardHeader>
                        <IonCardTitle>{work.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p>Publié : {work.year}</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
        )}

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Erreur de Recherche"
          message="Veuillez entrer un nom d'auteur pour effectuer une recherche."
          buttons={['OK']}
        />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default OLSearch;
