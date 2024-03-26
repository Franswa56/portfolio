import "./_About.scss";
import devpic from "../../style/assets/aboutImg.png";
import HTML from "../../style/assets/HTML.png";
import CSS from "../../style/assets/CSS.png";
import SCSS from "../../style/assets/SCSS.png";
import JS from "../../style/assets/JS.png";
import DB from "../../style/assets/DB.png";
import AWS from "../../style/assets/AWS.png";
import NODE from "../../style/assets/NODE.png";
import REACT from "../../style/assets/REACT.png";
import FIRE from "../../style/assets/FIRE.png";
import REDUX from "../../style/assets/REDUX.png";
import VSCODE from "../../style/assets/VSCODE.png"
import AboutIcone from "../../components/AboutIcone/AboutIcone";


function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__card zero">
          <h2 className="about__title">Développeur Web | 28 ans | Innovateur et Créateur</h2>
          <p className="about__desc">Je suis un architecte du web moderne, spécialisé en React, avec un talent pour transformer les idées complexes en applications web fluides et engageantes. Mon approche est guidée par une quête incessante d'innovation et une passion pour l'excellence technique.</p>
        </div>
        <img className="about__img" src={devpic}></img>
        {/* Ici, vous pouvez ajouter des images ou d'autres éléments si nécessaire */}
      </div>
      <div className="about__container">
        <div className="about__card one">
          <h3 className="about__skills-title">Compétences Techniques :</h3>
          <ul className="about__skills-list">
            <li>
              <strong>Front-End :</strong> Expertise en Html/CSS, SCSS, Javascript, React, Redux etc... Pour des applications web structurées.
            </li>
            <li>
              <strong>Outils de Développement :</strong> Utilisation quotidienne de Git, GitHub et VSCode dans un environnement Node.js. Expérience avec Jest pour le testing d'applications.
            </li>
            <li>
              <strong>Design et Performances :</strong> Aptitude pour le design UX/UI avec un focus sur l'accessibilité, les animations fluides, et l'optimisation des performances web.
            </li>
            <li>
              <strong>Back-End :</strong> Compétences techniques en gestion de back-ends et crétion de bases de données notaemments via Firebase et Mongodb.
            </li>
          </ul>
        </div>
        <div className="about__card two">
          <h3 className="about__tech-title">Technologies utilisées</h3>
          <div className="about__tech-table">
            <AboutIcone name="VSCODE" icone={VSCODE} />
            <AboutIcone name="HTML" icone={HTML} />
            <AboutIcone name="CSS" icone={CSS} />
            <AboutIcone name="SCSS" icone={SCSS} />
            <AboutIcone name="JavaScript" icone={JS} />
            <AboutIcone name="MongoDB" icone={DB} />
            <AboutIcone name="AWS" icone={AWS} />
            <AboutIcone name="Node.js" icone={NODE} />
            <AboutIcone name="React" icone={REACT} />
            <AboutIcone name="Redux" icone={REDUX} />
            <AboutIcone name="Firebase" icone={FIRE} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
