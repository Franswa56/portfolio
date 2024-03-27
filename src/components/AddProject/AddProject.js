import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../index";
import "./_AddProject.scss";

function AddProject({ closeModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Met à jour l'état avec le premier fichier sélectionné
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      console.error("Aucun fichier sélectionné");
      return;
    }

    const storage = getStorage();
    const storageReference = storageRef(storage, `projects/${file.name}`); // Chemin dans Firebase Storage

    uploadBytes(storageReference, file)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        const tagsArray = tags.split(',').map(tag => tag.trim()); // Transforme la chaîne en tableau et supprime les espaces inutiles
        const projectData = {
          name,
          description,
          imageUrl: downloadURL, // Utilisez l'URL de l'image téléchargée
          projectUrl: url, // URL du projet ajoutée par l'utilisateur
          tags: tagsArray
        };

        console.log("Tentative d'ajout du projet : ", projectData);
        return push(ref(db, "projects"), projectData);
      })
      .then(() => {
        console.log("Projet ajouté avec succès.");
        setName("");
        setDescription("");
        setFile(null); // Réinitialiser l'état du fichier
        setTags('');
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du projet : ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="modal">
      <button onClick={closeModal} className="modal__button-close">
        Fermer
      </button>
      <div className="modal__duo">
        <label className="modal__text">Nom du projet:</label>
        <input type="text" value={name} className="modal__input" onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="modal__duo">
        <label className="modal__text">Description:</label>
        <textarea value={description} className="modal__input-text" onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className="modal__duo">
        <label className="modal__text">Tags du projet (séparés par des virgules) :</label>
        <input type="text" value={tags} className="modal__input" onChange={(e) => setTags(e.target.value)} />
      </div>
      <div className="modal__duo">
        <label className="modal__text">URL du projet:</label>
        <input type="url" value={url} className="modal__input" onChange={(e) => setUrl(e.target.value)} required />
      </div>
      <div className="modal__duo">
        <label className="modal__text">Image du projet:</label>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <button type="submit" className="modal__button">
        Ajouter le projet
      </button>
    </form>
  );
}

export default AddProject;
