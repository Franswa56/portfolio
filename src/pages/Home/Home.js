import "./_Home.scss";
import picto from '../../style/assets/picto.png'
import {Link} from 'react-router-dom'
import picto1 from '../../style/assets/picto1.png'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <p className="home__job">Développeur Web</p>
        <h1 className="home__desc">La créativité codée pour des expériences web sur mesure.</h1>
        <img src={picto1} className="home__picto1" alt="illustration"></img>
        <p className="home__work">Vous avez un projet en tête et cherchez du soutien ?<br></br> <br></br>Confiez-moi vos idées accompagnées d'une documentation détaillée et je me chargerai de développer pour vous une technologie robuste et évolutive.</p>
        
        <div className="home__button-cont">
      <Link to="/contact" className="home__button">
        <p className="home__button-text">Me contacter</p>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
        
      </div>
      <div className="home__picto">
        <img src={picto} className="home__picto-img"></img>
      </div>
    </div>
  );
}

export default Home;
