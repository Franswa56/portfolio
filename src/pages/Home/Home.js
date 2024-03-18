import "./_Home.scss";
import picto from '../../style/assets/picto.png'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <p className="home__job">Développeur Web</p>
        <h1 className="home__desc">je transforme vos idées en solutions web et mobiles performantes et intuitives.</h1>
        <p className="home__work">Vous avez un projet en tête et cherchez du soutien ? Confiez-moi vos idées accompagnées d'une documentation détaillée et je me chargerai de développer pour vous une technologie robuste et évolutive.</p>
        <button className="home__button">
            <p className="home__button-text">Me contacter</p>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="home__picto">
        <img src={picto} className="home__picto-img"></img>
      </div>
    </div>
  );
}

export default Home;
