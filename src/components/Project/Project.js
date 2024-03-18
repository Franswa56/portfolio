import "./_Project.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

function Project({ name, description, image }) {
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
      <div>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <img src={image}></img>
      </div>
    </article>
  );
}

export default Project;
