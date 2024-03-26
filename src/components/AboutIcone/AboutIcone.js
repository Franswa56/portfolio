import "./_AboutIcone.scss";

function AboutIcone({ icone, name }) {
  return (
    <div className="about-icone">
      <img src={icone} alt={name} className="about-icone__img" />
      <div className="about-icone__tooltip">{name}</div>
    </div>
  );
}

export default AboutIcone;
