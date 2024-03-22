import "./_Contact.scss";

import React, { useState } from "react";
import { ref, push, getDatabase } from "firebase/database";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère une référence à la base de données
    const db = getDatabase();
    const messagesRef = ref(db, "messages");

    // Crée un nouveau message dans la base de données
    push(messagesRef, {
      name,
      email,
      message,
    })
      .then(() => {
        // Réinitialise les champs du formulaire après l'envoi
        setName("");
        setEmail("");
        setMessage("");
        alert("Votre message a été envoyé avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message : ", error);
      });
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <form onSubmit={handleSubmit} className="contact__form">
          <h2 className="contact__title">Envoyez moi un Message !</h2>
          <div className="contact__input">
            <label>Nom :</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="contact__input">
            <label>Email :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="contact__input">
            <label>Message :</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="contact__button">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
