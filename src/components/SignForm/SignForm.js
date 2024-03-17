import React, { useState, useEffect } from 'react';
import './_SignForm.scss';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté

  const auth = getAuth();

  useEffect(() => {
    // Écouter les changements d'état de connexion
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Nettoyer l'abonnement à la désinscription
    return () => unsubscribe();
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion : ", error);
        setError("Erreur de connexion. Vérifiez votre email et mot de passe.");
        setLoading(false);
      });
      setEmail('');
      setPassword('');
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
        setEmail('');
        setPassword('');
      console.log('Déconnexion réussie');
    }).catch((error) => {
      console.error('Erreur lors de la déconnexion', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
        {loading ? 'loading':
      user ? (
        <div className="signin-message">
          <p>Bonjour François, veux-tu <Link to="/projets" className='link'>ajouter des projets ?</Link></p>
          <button className='logout' onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </>
      )}
    </form>
  );
}

export default SignForm;

