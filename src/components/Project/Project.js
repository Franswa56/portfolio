import "./_Project.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

function Project({ name, description, image, url, isImageLeft, tags }) {
  const projectClass = isImageLeft ? "project--image-left" : "project--image-right";

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
      <div className={`project__container ${projectClass}`}>
        <img className="project__img" src={image}></img>
        <div className="project__text">
          <h3 className="project__name">{name}</h3>
          <h4 className="project__desc">{description}</h4>
          <div className="project__tags">
            {tags.map((tag, index) => (
              <p className="project__tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="project__url">
              Visitez le projet
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
