import React, { useState, useEffect } from "react";
import Project from "../../components/Project/Project";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./_ProjectPage.scss";
import AddProject from "../../components/AddProject/AddProject";
import { ref, getDatabase, onValue } from "firebase/database";

function ProjectPage() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]); // État pour stocker les projets

  const auth = getAuth();

  const fetchProjects = (setProjects) => {
    const db = getDatabase();
    const projectsRef = ref(db, "projects");

    // Écoute les modifications sur le noeud 'projects'
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      const projectsList = [];

      // Convertir l'objet des projets en tableau
      for (let id in data) {
        projectsList.push({ id, ...data[id] });
      }

      // Met à jour l'état dans le composant appelant avec la liste des projets
      setProjects(projectsList);
    });
  };

  useEffect(() => {
    // Récupère les projets indépendamment de l'état d'authentification de l'utilisateur
    fetchProjects(setProjects);

    // Écouter les changements d'état de connexion pour l'utilisateur
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Nettoyer l'abonnement à la désinscription
    return () => unsubscribe();
  }, []);

  console.log(projects);
  return (
    <div className="project-page-over">
      <div className="project-page">
        <div className="project-page__container">
          <h1 className="project-page__title">Mes projets</h1>
          <div className="project-page__projects">
            {user && <AddProject />}
            {projects.map((project) => (
              <Project key={project.id} name={project.name} description={project.description} image={project.imageUrl} url={project.projectUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
