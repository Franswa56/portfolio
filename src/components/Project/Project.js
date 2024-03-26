import "./_Project.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";


function Project({ name, description, image, url }) {
  // Écouter les changements d'état de connexion
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <article className="project">
      <div className="project__container">
        <h3 className="project__name">{name}</h3>
        <h4 className="project__desc">{description}</h4>
        <img className="project__img"src={image}></img>
        {url && <a href={url} target="_blank" rel="noopener noreferrer" className="project__url">Visitez le projet</a>}
      </div>
    </article>
  );
}

export default Project;
