import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../index"; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier firebase.js

function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Structure des données de projet
    const projectData = {
      name,
      description,
      // Vous pouvez ajouter d'autres champs ici si nécessaire
    };

    // Ajoute les données à la base de données Firebase sous le noeud "projects"
    console.log("Tentative d'ajout du projet : ", projectData);
    push(ref(db, "projects"), projectData)
      .then(() => console.log("Projet ajouté avec succès."))
      .catch((error) => console.error("Erreur lors de l'ajout du projet : ", error));

    // Réinitialise les champs du formulaire
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom du projet:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Ajouter le projet</button>
    </form>
  );
}

export default AddProject;
