import sourceIcon from "./../../assets/icon-source.svg";

const InfoSection = ({ planetData, activePlanet, activeTab }) => {
  const activePlanetInfo = planetData.find(
    (planet) => planet.name === activePlanet
  );
  const text =
    activeTab === 0
      ? activePlanetInfo.overview.content
      : activeTab === 1
      ? activePlanetInfo.structure.content
      : activePlanetInfo.geology.content;

  const wikiLink =
    activeTab === 0
      ? activePlanetInfo.overview.source
      : activeTab === 1
      ? activePlanetInfo.structure.source
      : activePlanetInfo.geology.source;
  return (
    <section className="info-section">
      <h2 className="info-section__planet-name">{activePlanet}</h2>
      <p className="info-section__planet-info">{text}</p>
      <div className="wiki-link__container">
        <p>Source :</p>
        <a href={wikiLink} target="__blank" className="wiki-link">
          Wikipedia
        </a>
        <img src={sourceIcon} alt="" className="wiki-link__source-icon" />
      </div>
    </section>
  );
};

export default InfoSection;
